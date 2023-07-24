import { configureStore } from '@reduxjs/toolkit'
import { type Library } from '../models'
import booksAvailableSlice from './states/booksAvailable'
import booksToReadSlice from './states/booksToRead'

export interface AppStore {
  booksAvailable: Library
  booksToRead: Library
}

export const store = configureStore<AppStore>({
  reducer: {
    booksAvailable: booksAvailableSlice,
    booksToRead: booksToReadSlice
  }
})
