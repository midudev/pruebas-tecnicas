import { create } from "zustand";
import zustandToSvelte from "./helpers/zustandToSvelte";

export interface BooksState {
  value: IBook[],
  add: (book: IBook) => void;
  remove: (boodId: string) => void;
}

const store = create<BooksState>(set => ({
  value: [],

  add(book) {
    set(state => ({
      value: [...state.value, book]
    }))
  },

  remove(boodId) {
    set(state => ({
      value: state.value.filter(b => b.ISBN === boodId)
    }))
  },
}));


export const readingList = zustandToSvelte<BooksState>(store);

