import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import library from "@/data/books.json"
import { Library } from "@/interfaces/books"

interface BearState {
  library: Library[],
  getBooks: () => void
}

const libraryStore = create<BearState>()(
  persist(
    (set) => ({
      library: [],
      getBooks: () => {
        if (Array.isArray(library) && library.length > 0) {
          return set({ library });
        }
      }
    }),
    {
      name: 'library-storage', // name of the item in the storage (must be unique)
    }
  )
)

export default libraryStore