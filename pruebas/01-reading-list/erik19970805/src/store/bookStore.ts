import { libraryData } from '@data/library';
import { type IBook } from '@interfaces/library';
import { create } from 'zustand';

export interface BookStore {
  error: boolean;
  message: string;
  books: IBook[];
  cartBooks: IBook[];
  addBook: (book: IBook) => void;
  addBooks: (books: IBook[]) => void;
  removeBook: (book: IBook) => void;
  clearBooks: () => void;
  clearMessage: () => void;
}

export const useBookStore = create<BookStore>((set) => ({
  message: '',
  error: false,
  books: libraryData.map(({ book }) => book),
  cartBooks: [],
  addBook: (book: IBook) => {
    set((state) => {
      const cartBooks = [...state.cartBooks, book];
      const books = state.books.filter((b) => b.ISBN !== book.ISBN);
      global.localStorage?.setItem('cartBooks', JSON.stringify(cartBooks));
      return { books, cartBooks, message: 'Libro agregado', error: false };
    });
  },
  addBooks: (cartBooks) => {
    set(() => {
      const books = libraryData
        .map(({ book }) => book)
        .filter((b) => !cartBooks.some((cb) => cb.ISBN === b.ISBN));
      return { cartBooks, books };
    });
  },
  removeBook: (book: IBook) => {
    set((state) => {
      const books = [...state.books, book];
      const cartBooks = state.cartBooks.filter((b) => b.ISBN !== book.ISBN);
      global.localStorage?.setItem('cartBooks', JSON.stringify(cartBooks));
      return { books, cartBooks, message: 'Libro eliminado', error: false };
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
