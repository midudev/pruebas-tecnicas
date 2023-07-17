import booksMock from '@/mocks/books.json'
import { type IWrapedBook, type TWrapedBooks } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  avaibleBooks: TWrapedBooks
  readList: TWrapedBooks
}

interface Action {
  addToReadList: (book: IWrapedBook) => void
  removeFromReadList: (wrapedBook: IWrapedBook) => void
  toggleBookReadList: (book: IWrapedBook) => string
  getAvaibleBooks: () => TWrapedBooks
  getReadList: () => TWrapedBooks
  syncStateLocalStoage: (wrapedAvaibleBooks: TWrapedBooks, wrapedReadList: TWrapedBooks) => void
}

const utilRemoveBooks = (booksToFilter: TWrapedBooks, bookToRemove: IWrapedBook) => {
  return booksToFilter.filter((actualWrapedBook) => bookToRemove.book.ISBN !== actualWrapedBook.book.ISBN)
}

export const useLibraryStore = create(persist<State & Action>(
  (set, get) => ({
    avaibleBooks: booksMock.library,
    readList: [],
    addToReadList: (wrapedBook) => {
      const readList = [...get().readList, wrapedBook]

      const avaibleBooks = utilRemoveBooks(get().avaibleBooks, wrapedBook)

      set({ readList, avaibleBooks })
    },
    removeFromReadList: (wrapedBook) => {
      const readList = utilRemoveBooks(get().readList, wrapedBook)

      const avaibleBooks = [...get().avaibleBooks, wrapedBook]

      set({ readList, avaibleBooks })
    },
    toggleBookReadList: (wrapedBook) => {
      const foundBook = get().readList.some((actualWrapedBook) => actualWrapedBook.book.ISBN === wrapedBook.book.ISBN)

      let outputMessage = wrapedBook.book.title
      if (foundBook) {
        get().removeFromReadList(wrapedBook)
        outputMessage += ' removed'
      } else {
        get().addToReadList(wrapedBook)
        outputMessage += ' added'
      }

      return outputMessage
    },
    getAvaibleBooks: () => get().avaibleBooks,
    getReadList: () => get().readList,
    syncStateLocalStoage: (wrapedFreeBooks, wrapedReadList) => {
      set(() => ({ avaibleBooks: wrapedFreeBooks, readList: wrapedReadList }))
    }
  }),
  {
    name: 'library-storage',
    version: 1
  }
))
