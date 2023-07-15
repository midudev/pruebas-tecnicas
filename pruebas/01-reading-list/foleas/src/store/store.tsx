import { create } from "zustand";
import { Store } from "./storeTypes";

export const useStore = create<Store>((set) => ({
  perPage: 4,
  page: 1,
  changePage: (newPage) => set(() => ({ page: newPage })),
  genre: "",
  changeGenre: (newGenre) => set(() => ({ genre: newGenre })),
  books: [],
  setBooks: (books) => set(() => ({ books })),
}));
