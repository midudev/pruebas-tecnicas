import { create } from "zustand";
import { Store } from "./storeTypes";

// const getLocalStorage = (key: string) =>
//   JSON.parse(window.localStorage.getItem(key) || "") as
//     | string
//     | number
//     | Array<string>;

const getLocalStorage = (key: string) => {
  const localStorage = window.localStorage.getItem(key);
  if (localStorage !== null) {
    const localStorageJson = JSON.parse(localStorage) as
      | string
      | number
      | Array<string>;
    return localStorageJson;
  }
  return false;
};

const setLocalStorage = (key: string, value: string | number | Array<string>) =>
  window.localStorage.setItem(key, JSON.stringify(value));

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
