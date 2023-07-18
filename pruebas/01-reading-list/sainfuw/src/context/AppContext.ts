import { createContext } from 'react';
import { AppContextType, IBook } from '../types';

export const ContextState = {
  books: [],
  readList: [],
  addToReadList: (book: IBook) => book,
  removeFromReadList: (book: IBook) => book,
  setReadList: (books: IBook[]) => books,
  filterByGenre: '',
  setFilterByGenre: (genre: string) => genre,
  filteredBooks: [],
  setFilteredBooks: (books: IBook[]) => books,
}

export const AppContext = createContext<AppContextType>(ContextState);