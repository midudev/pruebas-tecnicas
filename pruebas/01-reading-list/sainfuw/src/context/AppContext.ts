import { createContext } from 'react';
import { AppContextType, IBook } from '../types';

export const ContextState = {
  books: [],
  favoriteBooks: [],
  addToFavorites: (book: IBook) => book,
  removeFromFavorites: (book: IBook) => book
}

export const AppContext = createContext<AppContextType>(ContextState);