import { configureStore } from '@reduxjs/toolkit'
import BookSlice from './books/slice'
import readingSlice from './readingList/slice';


export const store = configureStore({
  reducer:{
    books: BookSlice,
    reading: readingSlice
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch