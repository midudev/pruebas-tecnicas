import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import library from "@/data/books.json"
import { Library, Book } from "@/interfaces/books"

interface BearState {
  library: Library[],
  readingList: Book[],
  getBooks: () => void,
  createReadingList: (arg: Book | null) => void,
}

const libraryStore = create<BearState>()(
  persist(
    (set) => ({
      library: [],
      readingList: [],
      getBooks: () => {
        if (Array.isArray(library) && library.length > 0) {
          return set({ library });
        }
      },
      createReadingList: (book) => {
        if (book) {
          set((state) => {
            const exist = state.readingList.find(reading => reading.ISBN === book.ISBN)

            if (!exist) {
              return {
                readingList: [...state.readingList, book]
              }
            }

            return state
          })
        }
      }
    }),
    {
      name: 'library-storage', // name of the item in the storage (must be unique)
    }
  )
)

export default libraryStore