import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_KEYS, type Library } from '../../models'

const booksStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKS_TO_READ)
const initialState: Library = booksStorage !== null
  ? JSON.parse(booksStorage)
  : []

export const booksToReadSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.BOOKS_TO_READ,
  initialState,
  reducers: {
    addBookToRead: (state, action) => {
      const { newBook } = action.payload
      const newBooksToRead = [...state, newBook]

      localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_TO_READ, JSON.stringify(newBooksToRead))
      return newBooksToRead
    },
    removeBookToRead: (state, action) => {
      const { bookISBN } = action.payload
      const newBooksToRead = state.filter(book => book.ISBN !== bookISBN)

      localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_TO_READ, JSON.stringify(newBooksToRead))
      return newBooksToRead
    }
  }
})

export const { addBookToRead, removeBookToRead } = booksToReadSlice.actions
export default booksToReadSlice.reducer
