import books from '../../../../books.json';
import { create } from 'zustand'
import { Library } from '../types/bookType';
import { persist } from 'zustand/middleware'


type BookStore = {
    booksStore: Library[]
}
export const useBooksStore = create(
  persist<BookStore>(
    (set) => ({
      booksStore: books.library,
    }),
    { name: "booksAppStore" }
  )
);