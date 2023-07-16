import { create } from 'zustand'
import booksJson from '../books.json'
import { BooksState } from '../types'

export const useBooksStore = create<BooksState>((set) => ({
  dbbooks: [],
  WantReadBooks: [],
  getBooks: () => {
    console.log('json', booksJson.library)
    const dbbooks = booksJson.library

    set((state) => ({ ...state, dbbooks }))

    return dbbooks
  }
}))
