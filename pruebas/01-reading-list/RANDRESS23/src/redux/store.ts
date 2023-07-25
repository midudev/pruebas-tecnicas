import { configureStore } from '@reduxjs/toolkit'
import { type FiltersBooks, type Library } from '../models'
import booksAvailableSlice from './states/booksAvailable'
import booksToReadSlice from './states/booksToRead'
import filtersBooksSlice from './states/filtersBooks'
import booksFilteredSlice from './states/booksFiltered'

export interface AppStore {
  booksAvailable: Library
  booksToRead: Library
  booksFiltered: Library
  filtersBooks: FiltersBooks
}

export const store = configureStore<AppStore>({
  reducer: {
    booksAvailable: booksAvailableSlice,
    booksToRead: booksToReadSlice,
    booksFiltered: booksFilteredSlice,
    filtersBooks: filtersBooksSlice
  }
})
