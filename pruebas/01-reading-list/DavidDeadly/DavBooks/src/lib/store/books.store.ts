import { create } from "zustand";
import { svelteBooksStore } from "./svelteBooksStore";
import { subscribeToStorage } from "./middlewares/subscribeToStorage";
import { devtools, persist } from "zustand/middleware";
import { page  } from "$app/stores";
import { get as getAppStore } from "svelte/store";
import type { PageData } from "../../routes/$types";

export const LIBRARY = 'Library'

const store = create(devtools(persist(subscribeToStorage((set, get) => ({
  readingList: [],
  add(id) {
    const { readingList: value } = get();
    const { data } = getAppStore(page);
    const { books } = data as PageData;


    const bookIndex = books.findIndex(book => book.ISBN === id);
    const book = books.at(bookIndex);

    const alreadyInReadingList = value.includes(id);
    if(!book || alreadyInReadingList) return;

    const readingList = [book.ISBN, ...value];

    set({ readingList });
  },

  remove(id) {
    const { readingList: value } = get();
    const { data } = getAppStore(page);
    const { books } = data as PageData;

    const bookIndex = books.findIndex(book => book.ISBN === id);
    const book = books.at(bookIndex);

    const isNotInReading = !value.includes(id);
    if(!book || isNotInReading) return;

    const readingList = value
    .filter(bookId => bookId !== id);
  
    set({ readingList })
  },
  reset: () => set({ readingList: [] })
})), { 
  name: LIBRARY 
})));


export const booksStore = svelteBooksStore(store);
