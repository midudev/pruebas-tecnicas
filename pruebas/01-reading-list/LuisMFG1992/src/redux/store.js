import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './booksSlice'
import thunk from 'redux-thunk'

export default configureStore({
  reducer: { books: booksReducer },
  middleware: [thunk],
})
