import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import { type Library, BookList } from "../types.d";

export interface BooksContextType {
  books: Library[];
  setBooks: Dispatch<SetStateAction<Library[]>>;
  selectedGenre: string | null;
  setSelectedGenre: Dispatch<SetStateAction<string | null>>;
  maxPages: number;
  setMaxPages: Dispatch<SetStateAction<number>>;
  selectedBooks: Library[];
  setSelectedBooks: Dispatch<SetStateAction<Library[]>>;
  bookStatus: BookList;
  setBookStatus: Dispatch<SetStateAction<BookList>>;
}

export const BooksContext = createContext<BooksContextType | undefined>(
  undefined
);
