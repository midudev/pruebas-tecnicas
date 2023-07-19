import { create } from 'zustand'
import { ALL_CATEGORIES } from '../constants'

export const useBookStore = create((set, get) => ({
  books: [],
  readingList: [],
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
