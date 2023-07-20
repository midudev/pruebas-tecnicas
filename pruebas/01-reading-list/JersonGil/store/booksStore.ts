import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import library from "@/data/books.json"
import { Library, Book } from "@/interfaces/books"

interface BearState {
  library: Library[],
  bookSelected: Book | null,
  getBooks: () => void,
  getBook: (arg: Book) => void,
}

const libraryStore = create<BearState>()(
  persist(
    (set) => ({
      library: [],
      bookSelected: null,
      getBooks: () => {
        if (Array.isArray(library) && library.length > 0) {
          return set({ library });
        }
      },
      getBook: (book) => {
        set({ bookSelected: book  })
      }
    }),
    {
      name: 'library-storage', // name of the item in the storage (must be unique)
    }
  )
)

export default libraryStore