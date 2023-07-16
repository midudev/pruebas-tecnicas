import { create } from 'zustand'
import booksJson from '../books.json'
import { BooksState } from '../types'

export const useBooksStore = create<BooksState>((set, get) => ({
  books: [],
  WantReadBooks: [],
  filterBooks: [],
  getBooks: () => {
    console.log('json', booksJson.library)
    const books = booksJson.library
    // dbbooks.map(b => { b.book.wantRead = false })
    set((state) => ({ ...state, books, filterBooks: books }))

    // return books
    // return await new Promise((resolve) => resolve(dbbooks))
  },
  setBooks: (filterBooks) => {
    set((state) => ({ ...state, filterBooks }))
  },
  filterGenre: (genre: string) => {
    get().books.filter((d) => {
      return d.book.genre === genre
    })
  }
}))
