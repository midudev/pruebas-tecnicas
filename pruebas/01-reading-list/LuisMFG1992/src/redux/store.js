import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './booksSlice'

export default configureStore({
  reducer: { books: booksReducer },
})
