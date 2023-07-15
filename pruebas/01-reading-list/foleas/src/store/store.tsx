import { create } from "zustand";
import { Store } from "./storeTypes";

export const useStore = create<Store>((set) => ({
  perPage: 4,
  page: 1,
  changePage: (newPage) => set(() => ({ page: newPage })),
  books: [],
  setBooks: (books) => set(() => ({ books })),
}));
