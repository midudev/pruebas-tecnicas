import { create } from 'zustand'
import { library } from '../mock_api/books.json'
import { type Book } from '../types'

interface BooksState {
  books: Book[]
  booksToRead: Book[]
  updateReadList: (book: Book) => void
  updateBooksList: (book: Book) => void
  filterByGenre: (genre: string) => void
  resetBooks: () => void
}

const booksArray = library.map(book => book.book)

export const useBooksStore = create<BooksState>()((set) => ({
  books: booksArray,
  booksToRead: [],
  updateReadList: (book) => {
    set((state) => ({
      books: state.books.filter((element) => element.ISBN !== book.ISBN),
      booksToRead: [...state.booksToRead, book]
    }))
  },
  updateBooksList: (book) => {
    set((state) => ({
      booksToRead: state.booksToRead.filter((element) => element.ISBN !== book.ISBN),
      books: [...state.books, book]
    }))
  },
  filterByGenre: (genre) => {
    set((state) => ({
      books: booksArray.filter(book => book.genre === genre && !state.booksToRead.includes(book))
    }))
  },
  resetBooks: () => {
    set((state) => ({
      books: booksArray.filter(book => !state.booksToRead.includes(book))
    }))
  }
}))
