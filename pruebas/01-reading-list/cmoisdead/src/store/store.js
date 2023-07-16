import { create } from "zustand";

const useBookStore = create((set) => ({
  books: [],
  current: [],
}));

export default useBookStore;
