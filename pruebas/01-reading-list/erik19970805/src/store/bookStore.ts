import { type IBook } from '@interfaces/library';
import { create } from 'zustand';

export interface BookStore {
  error: boolean;
  message: string;
  books: IBook[];
  addBook: (book: IBook) => void;
  addBooks: (books: IBook[]) => void;
  removeBook: (book: IBook) => void;
  clearBooks: () => void;
  clearMessage: () => void;
}

export const useBookStore = create<BookStore>((set) => ({
  message: '',
  error: false,
  books: [],
  addBook: (book: IBook) => {
    set((state) => {
      const exist = state.books.some((b) => b.ISBN === book.ISBN);
      const message = exist ? 'El libro ya existe' : 'Libro agregado';
      const books = exist ? state.books : [...state.books, book];
      global.localStorage?.setItem('books', JSON.stringify(books));
      return { books, message, error: exist };
    });
  },
  addBooks: (books) => {
    set({ books });
  },
  removeBook: (book: IBook) => {
    set((state) => {
      const books = state.books.filter((b) => b.ISBN !== book.ISBN);
      global.localStorage?.setItem('books', JSON.stringify(books));
      return { books, message: 'Libro eliminado', error: false };
    });
  },
  clearBooks: () => {
    global.localStorage?.clear();
    set({ books: [], message: 'Libros eliminados', error: false });
  },
  clearMessage: () => {
    set({ message: '', error: false });
  },
}));
