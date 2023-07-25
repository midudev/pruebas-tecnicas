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
    sortBooks: (_, action) => {
      const { booksAvailable, title, author, genre, pages } = action.payload

      const newBooksFiltered = booksAvailable.filter((book: Book) => {
        if (genre === BOOKS_GENRE_TYPES.ALL) {
          return (
          // book.title.includes(title) &&
          // book.author.name.includes(author) &&
            book.pages >= pages
          )
        }

        return (
        // book.title.includes(title) &&
        // book.author.name.includes(author) &&
          book.genre === genre &&
            book.pages >= pages
        )
      })

      localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_FILTERED, JSON.stringify(newBooksFiltered))
      return newBooksFiltered
    },
    // sortByGenre: (state, action) => {
    //   const { booksAvailable, genre } = action.payload
    //   const booksFilteredState = booksAvailable.length !== state.length
    //     ? state
    //     : booksAvailable

    //   const newBooksFiltered = genre === BOOKS_GENRE_TYPES.ALL
    //     ? booksAvailable
    //     : booksFilteredState.filter((book: Book) => book.genre === genre)

    //   localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_FILTERED, JSON.stringify(newBooksFiltered))
    //   return newBooksFiltered
    // },
    // sortByPages: (state, action) => {
    //   const { booksAvailable, pages } = action.payload
    //   const booksFilteredState = booksAvailable.length !== state.length
    //     ? state
    //     : booksAvailable

    //   const newBooksFiltered = booksFilteredState.filter((book: Book) => book.pages >= pages)

    //   localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKS_FILTERED, JSON.stringify(newBooksFiltered))
    //   return newBooksFiltered
    // },
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

export const {
  sortBooks,
  addBookFiltered,
  removeBookFiltered
} = booksFilteredSlice.actions
export default booksFilteredSlice.reducer
