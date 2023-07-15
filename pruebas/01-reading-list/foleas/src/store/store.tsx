import { create } from "zustand";
import { Store } from "./storeTypes";

export const useStore = create<Store>((set) => ({
  perPage: 4,
  page: 1,
  changePage: (newPage) => set(() => ({ page: newPage })),
  genres: [],
  setGenres: (genres) => set(() => ({ genres })),
  currentGenre: "",
  changeCurrentGenre: (newGenre) => set(() => ({ currentGenre: newGenre })),
  books: [],
  setBooks: (books) => set(() => ({ books })),
  filteredBooks: [],
  setFilteredBooks: (filteredBooks) => set(() => ({ filteredBooks })),
}));
