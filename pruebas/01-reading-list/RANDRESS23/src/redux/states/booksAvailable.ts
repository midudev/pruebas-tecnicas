import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_KEYS, type Library } from '../../models'
import { BOOKS } from '../../data/books'

const booksStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKS_AVAILABLE)
const initialState: Library = booksStorage !== null
  ? JSON.parse(booksStorage)
  : BOOKS

export const booksAvailableSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.BOOKS_AVAILABLE,
  initialState,
  reducers: {
    addBookAvailable: (state, action) => {
      const { newBook } = action.payload
      const newBooksAvailable = [...state, newBook]

      localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_AVAILABLE, JSON.stringify(newBooksAvailable))
      return newBooksAvailable
    },
    removeBookAvailable: (state, action) => {
      const { bookISBN } = action.payload
      const newBooksAvailable = state.filter(book => book.ISBN !== bookISBN)

      localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_AVAILABLE, JSON.stringify(newBooksAvailable))
      return newBooksAvailable
    },
    changeBooksAvailable: (_, action) => {
      const { newBooksAvailable } = action.payload

      return newBooksAvailable
    }
  }
})

export const {
  addBookAvailable,
  removeBookAvailable,
  changeBooksAvailable
} = booksAvailableSlice.actions
export default booksAvailableSlice.reducer
