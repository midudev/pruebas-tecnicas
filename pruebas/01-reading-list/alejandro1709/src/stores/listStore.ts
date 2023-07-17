import { type Book } from '@/types/book';
import { create } from 'zustand';

type ListStore = {
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (id: string) => void;
};

export const useListStore = create<ListStore>((set) => ({
  books: [],
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  removeBook: (id) =>
    set((state) => ({ books: state.books.filter((book) => book.ISBN !== id) })),
}));
