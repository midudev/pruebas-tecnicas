import { createSlice } from '@reduxjs/toolkit'
import { BOOKS_GENRE_TYPES, type Book, LOCAL_STORAGE_KEYS, type Library } from '../../models'
import { BOOKS } from '../../data/books'

const booksStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKS_FILTERED)
const initialState: Library = booksStorage !== null
  ? JSON.parse(booksStorage)
  : BOOKS

const compareTitleOrAuthor = (text: string, titleOrAuthor: string): boolean => {
  const isMatchWithTitle = text
    .toLowerCase()
    .includes(titleOrAuthor.toLowerCase())

  return isMatchWithTitle
}

export const booksFilteredSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.BOOKS_FILTERED,
  initialState,
  reducers: {
    sortBooks: (_, action) => {
      const { booksAvailable, titleOrAuthor, genre, pages } = action.payload

      const newBooksFiltered = booksAvailable.filter((book: Book) => {
        const isSelectAllBoks = genre === BOOKS_GENRE_TYPES.ALL
          ? book.pages >= pages
          : book.genre === genre && book.pages >= pages

        return (
          (compareTitleOrAuthor(book.title, titleOrAuthor) ||
          compareTitleOrAuthor(book.author.name, titleOrAuthor)) &&
          isSelectAllBoks
        )
      })

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
    },
    changeBooksFiltered: (_, action) => {
      const { newBooksFiltered } = action.payload

      return newBooksFiltered
    }
  }
})

export const {
  sortBooks,
  addBookFiltered,
  removeBookFiltered,
  changeBooksFiltered
} = booksFilteredSlice.actions

export default booksFilteredSlice.reducer
