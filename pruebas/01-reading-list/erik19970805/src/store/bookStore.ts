import { libraryData } from '@data/library';
import { type IBook } from '@interfaces/library';
import { create } from 'zustand';

export interface BookStore {
  error: boolean;
  message: string;
  maxPages: number;
  genre: string;
  pages: number;
  books: IBook[];
  genres: string[];
  cartBooks: IBook[];
  addBook: (book: IBook) => void;
  addBooks: (books: IBook[]) => void;
  removeBook: (book: IBook) => void;
  clearBooks: () => void;
  clearMessage: () => void;
  filterByPages: (pages: number) => void;
  filterByGenre: (genre: string) => void;
}

const getInitialBooks = () => libraryData.map(({ book }) => book);

const getGenres = () =>
  getInitialBooks().reduce((acc: string[], book) => {
    const exist = acc.some((a) => a === book.genre);
    return exist ? acc : [...acc, book.genre];
  }, []);

const getBooks = (cartBooks: IBook[]) =>
  getInitialBooks().filter((b) => cartBooks.some((cb) => cb.ISBN !== b.ISBN));

export const useBookStore = create<BookStore>((set) => ({
  message: '',
  pages: 0,
  error: false,
  books: getInitialBooks(),
  genres: getGenres(),
  genre: 'all',
  maxPages: Math.max(...libraryData.map(({ book }) => book.pages)),
  cartBooks: [],
  addBook: (book: IBook) => {
    set((state) => {
      const exist = state.cartBooks.some((b) => b.ISBN === book.ISBN);
      const message = exist ? 'El libro ya existe' : 'Libro agregado';
      const cartBooks = exist ? state.cartBooks : [...state.cartBooks, book];
      const books = exist ? state.books : state.books.filter((b) => b.ISBN !== book.ISBN);
      global.localStorage?.setItem('cartBooks', JSON.stringify(cartBooks));
      return { books, cartBooks, message, error: false };
    });
  },
  addBooks: (cartBooks) => {
    set((state) => {
      const books = state.books.filter((b) => !cartBooks.some((cb) => cb.ISBN === b.ISBN));
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
  filterByPages: (pages: number) => {
    set((state) => {
      const books = getBooks(state.cartBooks).filter((book) => book.pages >= pages);
      const newBooks = state.genre === 'all' ? books : books.filter((book) => book.genre === state.genre);
      return { books: newBooks, pages };
    });
  },
  filterByGenre: (genre) => {
    set((state) => {
      if (genre === 'all') return { books: getInitialBooks() };
      const books = getBooks(state.cartBooks).filter((book) => book.genre === genre);
      const newBooks = state.pages === 0 ? books : books.filter((book) => book.pages >= state.pages);
      return { books: newBooks, genre };
    });
  },
}));
