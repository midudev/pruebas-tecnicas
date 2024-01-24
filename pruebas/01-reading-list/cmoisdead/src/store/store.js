import { create } from "zustand";

const useBookStore = create((set) => ({
  books: [],
  current: [],
  genres: [],
  authors: [],
}));

export default useBookStore;
