import { create } from 'zustand'
import booksJson from '../books.json'
import { BooksState } from '../types'

export const useBooksStore = create<BooksState>((set) => ({
  books: [],
  getBooks: () => {
    console.log('json', booksJson.library)
    const books = booksJson.library

    set((state) => ({ ...state, books }))
  }
}))
