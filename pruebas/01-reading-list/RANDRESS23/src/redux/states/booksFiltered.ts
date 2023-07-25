import { createSlice } from '@reduxjs/toolkit'
import { BOOKS_GENRE_TYPES, type Book, LOCAL_STORAGE_KEYS, type Library } from '../../models'
import { BOOKS } from '../../data/books'

const booksStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKS_FILTERED)
const initialState: Library = booksStorage !== null
  ? JSON.parse(booksStorage)
  : BOOKS

export const booksFilteredSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.BOOKS_FILTERED,
  initialState,
  reducers: {
    sortByGenre: (_, action) => {
      const { booksAvailable, genre } = action.payload
      console.log({ booksAvailable, genre })

      const newBooksFiltered = genre === BOOKS_GENRE_TYPES.ALL
        ? booksAvailable
        : booksAvailable.filter((book: Book) => book.genre === genre)

      localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_FILTERED, JSON.stringify(newBooksFiltered))
      return newBooksFiltered
    },
    addBookFiltered: (state, action) => {
      const { newBook } = action.payload
      const newBooksFiltered = [...state, newBook]

      localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_FILTERED, JSON.stringify(newBooksFiltered))
      return newBooksFiltered
    },
    removeBookFiltered: (state, action) => {
      const { bookISBN } = action.payload
      const newBooksFiltered = state.filter(book => book.ISBN !== bookISBN)

      localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_FILTERED, JSON.stringify(newBooksFiltered))
      return newBooksFiltered
    }
  }
})

export const { sortByGenre, addBookFiltered, removeBookFiltered } = booksFilteredSlice.actions
export default booksFilteredSlice.reducer
