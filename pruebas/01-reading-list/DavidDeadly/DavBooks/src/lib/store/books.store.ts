import { create } from "zustand";
import { persist } from 'zustand/middleware'

import { svelteBooksStore } from "./svelteBooksStore";
import { getAllBooks, mapBookResponse } from "../services/books";

const store = create(persist<IBooks.Store>((set, get) => ({
  readingList: [],
  freeBooks: [],
  books: [],
  filters: null,

  fillFreeBooks(){
    const { readingList, filters, filterBooks } = get();
    const response = getAllBooks();
    const books = mapBookResponse({ response })
    const freeBooks = books.map(book => ({
      ...book,
      free: !readingList.includes(book.ISBN)
    }));
    
    if(!filters) return set({ freeBooks, books });

    return filterBooks(filters);
  },
  filterBooks(filters){
    const { pages, genre } = filters;
    const { readingList, fillFreeBooks } = get();
    const response = getAllBooks();
    const books: FreeBook[] = mapBookResponse({ response })
      .map(book => ({
        ...book,
        free: !readingList.includes(book.ISBN)
      }));

    const minPages = Math.min(...books.map(book => book.pages));
    const isPagesFilterDisabled = !pages || minPages === pages;
    if(isPagesFilterDisabled && !genre) {
      set({ filters: null });
      return fillFreeBooks();
    };


    if(isPagesFilterDisabled && !genre) {
      return fillFreeBooks();
    }

    const filteredBooks = books.filter(book => {
      if(!isPagesFilterDisabled && genre) {
        const isBookInRange = book.pages <= pages;
        return book.genre === genre && isBookInRange;
      }

      if(isPagesFilterDisabled) {
        return book.genre === genre;
      }

      const isBookInRange = book.pages <= pages;
      return isBookInRange;
    });

    set({ freeBooks: filteredBooks, filters });
  },
  add(id) {
    const { readingList: value, freeBooks: books } = get();
    const bookIndex = books.findIndex(book => book.ISBN === id);
    const book = books.at(bookIndex);

    if(!book || !book.free) return;

    const readingList = [...value];
    readingList.unshift(id);

    const freeBooks = [...books];
    const toReadBook = freeBooks.at(bookIndex);
    toReadBook && (toReadBook.free  = false);

    set({ readingList, freeBooks });
  },

  remove(id) {
    const { readingList: value, freeBooks: books } = get();
    const bookIndex = books.findIndex(book => book.ISBN === id);
    const book = books.at(bookIndex);

    if(!book || book.free) return;

    const freeBooks = [...books];
    const toReadBook = freeBooks.at(bookIndex);
    toReadBook && (toReadBook.free = true);

    const readingList = value
    .filter(bookId => bookId !== id);
      
  
    set({ readingList })
  },
  reset: () => set({ readingList: [] })
}), {
  name: "Library"
}));


export const booksStore = svelteBooksStore(store);

