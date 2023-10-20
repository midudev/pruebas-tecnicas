import { create } from 'zustand'
import data from '../services/books.json'
const { library } = data

const books = library.map(({ book }) => {
  // El ISBN es un identificador único para libros
  const { ISBN, ...rest } = book

  return { ...rest, id: book.ISBN }
})

const dataGenres = new Set(books.map(book => book.genre))
const genres = [...dataGenres]

export const useBookStore = create((set) => ({
  books,
  readingList: [],
  addBook: (book) => set(state => ({
    readingList: [...state.readingList, book],
    books: state.books.filter(b => b.id !== book.id)
  })),
  removeBook: (bookId) => set(state => ({
    readingList: state.readingList.filter(b => b.id !== bookId),
    books: [...state.books, ...state.readingList.filter(b => b.id === bookId)]
  })),
  genres
}))
