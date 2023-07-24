import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import library from "@/data/books.json"
import { Root, Book } from "@/interfaces/books"

interface LibraryState {
  library: Root,
  readingList: Book[],
  getBooks: () => void,
  createReadingList: (arg: Book | null) => void,
}

const libraryStore = create<LibraryState>()(
  persist(
    (set) => ({
      library: { library:[] },
      readingList: [],
      getBooks: () => {
        if (Array.isArray(library.library) && library.library.length > 0) {
          return set({ library: { library: library.library } });
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