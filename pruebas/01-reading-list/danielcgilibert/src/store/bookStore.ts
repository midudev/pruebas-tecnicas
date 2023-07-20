//DEPENDENCIES
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

//LIB
import { getBooks } from '../lib/map'

//TYPES
import { IBook } from '../types/book'

interface State {
  books: IBook[]
  readingList: IBook[]
  filterBooks: IBook[]
  onRehydrateStorage: () => Promise<void>
  totalBooks: number
  totalReadingList: number
  setFilterBooks: (books: IBook[]) => void
  addToReadingList: (book: IBook) => void
}

const handleRehydrate = async () => {
  await useStore.persist.rehydrate()
}

export const useStore = create<State>()(
  persist(
    (set) => {
      return {
        books: getBooks(),
        onRehydrateStorage: () => handleRehydrate(),
        readingList: [],
        filterBooks: [],
        totalBooks: 0,
        totalReadingList: 0,
        setFilterBooks: (books: IBook[]) =>
          set({ filterBooks: books, totalBooks: books.length }),
        addToReadingList: (book: IBook) =>
          set((state) => {
            // if book is already in reading list, remove it
            if (state.readingList.find((item) => item.ISBN === book.ISBN)) {
              const copyArray = state.readingList.filter(
                (item) => item.ISBN !== book.ISBN
              )

              // return new state
              return {
                readingList: [...copyArray],
                totalReadingList: state.readingList.length - 1
              }
            }

            // if book is not in reading list, add it
            return {
              readingList: [...state.readingList, book],
              totalReadingList: state.readingList.length + 1
            }
          })
      }
    },

    {
      partialize: (state) =>
        // only persist readingList and totalReadingList
        ({
          // Change this to change what is persisted
          readingList: state.readingList,
          totalReadingList: state.totalReadingList
        }),
      name: 'books-storage' // should be unique across your application
    }
  )
)
