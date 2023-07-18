import { createContext } from 'react';
import { IBook } from '../types';

type ContextType = {
  books: IBook[];
  filteredBooks: IBook[];
  setFilteredBooks: (books: IBook[]) => void;
}

export const ContextState = {
  books: [],
  filteredBooks: [],
  setFilteredBooks: (books: IBook[]) => books,
}

export const FilteredBooksContext = createContext<ContextType>(ContextState);