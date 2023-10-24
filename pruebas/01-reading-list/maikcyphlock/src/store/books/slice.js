import { createSlice } from '@reduxjs/toolkit'
import AllBooks from '../../../../books.json'

const initialState = () => {
  const initData = { library: AllBooks.library, mybooks: [] }

  const persistedState = localStorage.getItem('maikcyphlock_books')
  return persistedState ? JSON.parse(persistedState) : initData
}

export const BookSlice = createSlice({
  name: 'books',
  initialState: initialState(),
  reducers: {
    deleteBook: (state, action) => {
      const removedBook = state.mybooks.find(
        book => book.ISBN === action.payload.ISBN)
      const remainBooks = state.mybooks.filter(book => book.ISBN !== action.payload.ISBN)

      return { ...state, library: [...state.library, { book: removedBook }], mybooks: remainBooks }
    },
    addBook: (state, action) => {
      const deleteBookFromLibrary = state.library.filter(
        library => library.book.ISBN !== action.payload.ISBN
      )
      return { ...state, library: deleteBookFromLibrary, mybooks: [...state.mybooks, action.payload] }
    },
    getAllBookFromStorage: (state) => {
      const persistedState = localStorage.getItem('maikcyphlock_books')
      return JSON.parse(persistedState)
    }
  }
})

export default BookSlice.reducer
export const { deleteBook, addBook, getAllBookFromStorage } = BookSlice.actions
