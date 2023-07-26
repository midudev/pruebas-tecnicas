// useReadingListStore.js
import { create } from 'zustand'
import persist from '@/utils/persist'

export const useReadingListStore = create(
  persist(
    {
      key: 'readingList',
      default: [],
    },
    (set) => ({
      readingList: [],
      addBookToReadingList: (book) => {
        set((state) => {
          const readingList = state.readingList
          const existingBook = readingList.find((item) => item.ISBN === book.ISBN)

          // If the book already exists in the reading list, don't add it again
          if (!existingBook) {
            return {
              readingList: [...state.readingList, book],
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
