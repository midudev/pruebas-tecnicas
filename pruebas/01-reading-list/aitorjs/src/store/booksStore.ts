import { create } from 'zustand'
import booksJson from '../books.json'
import { BooksState } from '../types'

export const useBooksStore = create<BooksState>((set) => ({
  books: [],
  WantReadBooks: [],
  getBooks: () => {
    console.log('json', booksJson.library)
    const books = booksJson.library
    // dbbooks.map(b => { b.book.wantRead = false })
    set((state) => ({ ...state, books }))

    return books
    // return await new Promise((resolve) => resolve(dbbooks))
  },
  setBooks: (books) => {
    set((state) => ({ ...state, books }))
  }
}))
