import books from '../mockdata/books.json';
import { create } from 'zustand';

const allBooks = books.library.map((item) => item.book);

// Load and save store from localstorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const useBooks = create((set) => ({
  originalBooks: allBooks,
  books: allBooks,
  readinglist: [],
  filter: 'all',
  filteredBooks: allBooks,
  pagesfilter: 100,
  genres: [...new Set(allBooks.map((item) => item.genre))],
  inc: () => set((state) => ({ count: state.count + 1 })),
  addToReadingList: (book) => {
    set((state) => ({
      readinglist: [...state.readinglist, book],
      books: state.books.filter((item) => item.ISBN !== book.ISBN)
    }));
  },
  removeFromReadingList: (book) =>
    set((state) => ({
      readinglist: state.readinglist.filter((item) => item.ISBN !== book.ISBN),
      books: [...state.books, book]
    })),
  filterBooks: (filter) => {
    if (filter === 'all') {
      set((state) => ({
        books: state.originalBooks,
        filter: 'all'
      }));
    } else {
      set((state) => ({
        books: state.originalBooks.filter((item) => item.genre === filter),
        filter: filter
      }));
    }
  },
  filterByPages: (pages) => {
    set((state) => ({
      books: state.originalBooks.filter((item) => item.pages >= pages),
      pagesFilter: pages
    }));
  }
}));
