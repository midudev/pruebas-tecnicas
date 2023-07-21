import { create } from 'zustand'
import { ALL_CATEGORIES, LOCAL_STORAGE_KEYS } from '../constants'
import { getToLocalStorage } from '../utils/getToLocalStorage'

const localStorageReadingList = getToLocalStorage(LOCAL_STORAGE_KEYS.readingListState)

export const useBookStore = create((set, get) => ({
  books: [],
  readingList: localStorageReadingList ?? [],
  pageFilter: 0,
  genderFilter: ALL_CATEGORIES,

  updateBooks: (books) => set({ books }),
  updateReadingList: (readingList) => set({ readingList }),
  updatePageFilter: (pageFilter) => set({ pageFilter }),
  updateGenderFilter: (genderFilter) => set({ genderFilter })

  //   getBooks: () => get().books,
  //   getReadingList: () => get().readingList,
  //   getPageFilter: () => get().pageFilter,
  //   getGenderFilter: () => get().genderFilter

}))
