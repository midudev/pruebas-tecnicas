// src/store/useReadingListStore.js
import { create } from 'zustand'
import persist from '@/utils/persist'

export const useReadingListStore = create(
  persist(
    {
      key: 'readingList',
      getStorage: () => localStorage,
    },
    (set) => ({
      readingList: [],
      addBookToReadingList: (book) => {
        set((state) => {
          const readingList = [...state.readingList]
          const existingBook = readingList.find((item) => item.ISBN === book.ISBN)
          if (!existingBook) {
            return {
              readingList: [...readingList, book],
            }
          } else {
            return state
          }
        })
      },
      removeBookFromReadingList: (book) => {
        set((state) => ({
          readingList: state.readingList.filter((item) => item.ISBN !== book.ISBN),
        }))
      },
      clearReadingList: () => {
        set(() => ({
          readingList: [],
        }))
      },
    })
  )
)
