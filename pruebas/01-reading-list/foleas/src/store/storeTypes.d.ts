import { Book } from "../types";

// STORE
export type Store = {
  perPage: number;
  page: number;
  changePage: (value: number) => void;
  books: Array<Book>;
  setBooks: (books: Array<Book>) => void;
};
