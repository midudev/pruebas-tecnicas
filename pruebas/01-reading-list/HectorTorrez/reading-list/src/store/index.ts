import { configureStore } from '@reduxjs/toolkit'
import BookSlice from './books/slice'


export const store = configureStore({
  reducer:{
    books: BookSlice
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch