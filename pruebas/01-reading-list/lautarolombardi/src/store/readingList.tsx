import { create } from 'zustand'

import { type ReadingListStore } from '../types/store/readingList'
import { type Book } from '../types/book'

export const useReadingListStore = create<ReadingListStore>((set) => ({
  readingList: [],
  setReadingList: (newReadingList: ReadingListStore['readingList']) => {
    set(() => ({ readingList: newReadingList }))
  },
  toggleBook: (book: Book['ISBN']) => {
    const readingList = useReadingListStore.getState().readingList
    const draft = readingList.includes(book)
      ? readingList.filter((b) => b !== book)
      : [...readingList, book]

    useReadingListStore.getState().setReadingList(draft)
    localStorage.setItem('readingList', JSON.stringify(draft))
  }
}))
