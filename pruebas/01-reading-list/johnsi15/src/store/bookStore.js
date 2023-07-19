import { create } from 'zustand'
import data from '../services/books.json'
const { library } = data

export const useBookStore = create((set) => ({
  books: library,
  readingList: [],
  addBook: (book) => set(state => ({ readingList: [...state.readingList, book] })),
  removeBook: (bookId) => set(state => ({ readingList: state.readingList.filter(b => b.id !== bookId) }))
  // addBook: (book) => set((state) => ({ books: [...state.books, book] }))
}))
