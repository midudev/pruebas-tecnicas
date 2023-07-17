import { createContext } from 'react';
import { AppContextType, IBook } from '../types';

export const ContextState = {
  books: [],
  readList: [],
  addToReadList: (book: IBook) => book,
  removeFromReadList: (book: IBook) => book
}

export const AppContext = createContext<AppContextType>(ContextState);