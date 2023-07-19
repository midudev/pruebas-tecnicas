import { createContext } from 'react';
import { IBook } from '../types';

type ContextType = {
  books: IBook[];
  genres: string[];
}

export const ContextState = {
  books: [],
  genres: []
}

export const BooksContext = createContext<ContextType>(ContextState);