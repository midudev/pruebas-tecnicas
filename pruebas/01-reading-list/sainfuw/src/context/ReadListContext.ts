import { createContext } from 'react';
import { IBook } from '../types';

interface ContextType {
  readList: IBook[];
  addToReadList: (book: IBook) => void;
  removeFromReadList: (book: IBook) => void;
  setReadList: (books: IBook[]) => void;
}

export const ReadListContextState = {
  readList: [],
  addToReadList: (book: IBook) => book,
  removeFromReadList: (book: IBook) => book,
  setReadList: (books: IBook[]) => books,
}

export const ReadListContext = createContext<ContextType>(ReadListContextState);