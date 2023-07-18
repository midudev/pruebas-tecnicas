import { createContext } from 'react';
import { Book } from '../../types';

export interface IAppContext {
    availableBooks: Book[];
    readingBooks: Book[];
    addForReading: (book: Book) => void;
    removeFromReading: (book: Book) => void;
}

export const AppContext = createContext({} as IAppContext);