import { create } from 'zustand'
import libraryJson from '../../../books.json'
import { UseLibraryStoreParams, Library as LibraryType } from '../types'
import { filterBooks } from '../utils'
import { persist } from 'zustand/middleware'

const { library: initialBooks } = libraryJson as LibraryType

const genres = [...new Set(initialBooks.map((item) => item.book.genre))]
const minPages = Math.min(...initialBooks.map((item) => item.book.pages))
const maxPages = Math.max(...initialBooks.map((item) => item.book.pages))

const initialFilters = {
  query: '',
  genre: '',
  pages: maxPages,
}

export const useLibraryStore = create<UseLibraryStoreParams>()(
  persist(
    (set, get) => ({
      // states
      filters: initialFilters,
      availableBooks: initialBooks.length,
      filteredBooks: initialBooks,
      readlist: [],
      genres,
      minPages,
      maxPages,

      //conditions
      isOpenReadList: false,

      //functions
      setIsOpenReadList: (isOpenReadList) => set({ isOpenReadList }),
      setFilteredBooks: () => {
        const { filters } = get()
        const newBooks = filterBooks({ books: initialBooks, filters })

        set({ filteredBooks: newBooks })
      },

      setFilter: ({ property, value }) => {
        const updatedProperty = {
          [property]: value,
        }

        set((state) => ({ filters: { ...state.filters, ...updatedProperty } }))
      },
      resetFilters: () => set({ filters: initialFilters }),
      addReadListBook: (book) => set((state) => ({ readlist: [...state.readlist, book] })),
      removeReadListBook: (book) => {
        const { readlist } = get()
        const updatedReadList = readlist.filter((readlistBook) => readlistBook.book.title !== book.book.title)

        set({ readlist: updatedReadList })
      },
    }),
    {
      name: 'read-list-storage',
      partialize: (state) => ({ readlist: state.readlist }),
    }
  )
)
