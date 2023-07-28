import { create } from "zustand";
import { Store } from "./storeTypes";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const useStore = create<Store>((set) => ({
  perPage: 4,
  page: (getLocalStorage("page") as number) || 1,
  changePage: (newPage) =>
    set(() => {
      setLocalStorage("page", newPage);
      return { page: newPage };
    }),
  search: (getLocalStorage("search") as string) || "",
  changeSearch: (newSearch) =>
    set(() => {
      setLocalStorage("search", newSearch);
      return { search: newSearch };
    }),
  genres: [],
  setGenres: (genres) => set(() => ({ genres })),
  currentGenre: (getLocalStorage("currentGenre") as string) || "",
  changeCurrentGenre: (newGenre) =>
    set(() => {
      setLocalStorage("currentGenre", newGenre);
      return { currentGenre: newGenre };
    }),
  books: [],
  setBooks: (books) => set(() => ({ books })),
  filteredBooks: (getLocalStorage("filteredBooks") as Array<string>) || [],
  setFilteredBooks: (filteredBooks) =>
    set(() => {
      setLocalStorage("filteredBooks", filteredBooks);
      return { filteredBooks };
    }),
  selectedBooks: (getLocalStorage("selectedBooks") as Array<string>) || [],
  setSelectedBooks: (selectedBooks) =>
    set(() => {
      setLocalStorage("selectedBooks", selectedBooks);
      return { selectedBooks };
    }),
}));
