import { create } from "zustand";
import { persist } from 'zustand/middleware'

import zustandToSvelte from "./helpers/zustandToSvelte";
import { getAllBooks, mapBookResponse } from "./services/books";

const store = create(persist<IBooks.Store>((set, get) => ({
  readingList: [],
  freeBooks: [],

  fillFreeBooks(){
    const { readingList } = get();
    const response = getAllBooks();
    const books: FreeBook[] = mapBookResponse({ response })
      .map(book => ({
        ...book,
        free: !readingList.includes(book.ISBN)
      }));
  
    set({ freeBooks: books })
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


export const booksStore = zustandToSvelte<IBooks.Store>(store);

