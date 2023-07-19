import { create } from 'zustand'
import { type Book } from '../types'

interface BookStore {
  books: Book[]
  setBooks: (books: Book[]) => void
  favorites: Book[]
  setFavorites: (favorite: Book[]) => void
  maxPages: number
  setMaxPages: (maxPages: number) => void
}

export const useBookStore = create<BookStore>(set => ({
  books: [],
  setBooks: books => { set({ books }) },
  favorites: [],
  setFavorites: favorites => { set({ favorites }) },
  maxPages: 0,
  setMaxPages: maxPages => { set({ maxPages }) }
}))
