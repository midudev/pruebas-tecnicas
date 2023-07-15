import { create } from 'zustand'

export const useBookStore = create((set, get) => ({
  books: [],
  readingList: [],
  pageFilter: 1,
  genderFilter: 'Terror',

  updateBooks: (books) => set({ books }),
  updateReadingList: (readingList) => set({ readingList }),
  updatePageFilter: (pageFilter) => set({ pageFilter }),
  updateGenderFilter: (genderFilter) => set({ genderFilter })

  //   getBooks: () => get().books,
  //   getReadingList: () => get().readingList,
  //   getPageFilter: () => get().pageFilter,
  //   getGenderFilter: () => get().genderFilter

}))
