import { V } from "vitest/dist/types-198fd1d9.js";
import { Book } from "../types";

export interface Pages {
  min: number;
  max: number;
}

// STORE
export type Store = {
  perPage: number;
  maxPage: number;
  setMaxPage: (value: number) => void;
  page: number;
  changePage: (value: number) => void;
  pagesRange: Pages | null;
  setPagesRange: (value: Pages) => void;
  search: string;
  changeSearch: (value: string) => void;
  genres: Array<string>;
  setGenres: (genres: Array<string>) => void;
  currentGenre: string;
  changeCurrentGenre: (value: string) => void;
  books: Array<Book>;
  setBooks: (books: Array<Book>) => void;
  filteredBooks: Array<string>;
  setFilteredBooks: (filteredBooks: Array<string>) => void;
  selectedBooks: Array<string>;
  setSelectedBooks: (selectedBooks: Array<string>) => void;
};
