import { create } from 'zustand'
import booksJson from '../books.json'
import { BooksState } from '../types'

export const useBooksStore = create<BooksState>((set) => ({
  dbbooks: [],
  WantReadBooks: [],
  getBooks: () => {
    console.log('json', booksJson.library)
    const dbbooks = booksJson.library
    dbbooks.map(b => { b.book.wantRead = false })
    set((state) => ({ ...state, dbbooks }))

    // return dbbooks
    // return await new Promise((resolve) => resolve(dbbooks))
  },
  setBooks: (dbbooks) => {
    set((state) => ({ ...state, dbbooks }))
  }
}))
