import { create } from 'zustand'
import { searchBooks } from '../services/library'
import { persist } from 'zustand/middleware'

export const useLibraryStore = create(
  persist(
    (set, get) => ({
      library: [],
      filters: {
        minPages: 0,
        genre: 'Todos'
      },
      toReadLibrary: [],
      getBooks: async () => {
        const allBooks = await searchBooks()
        const { toReadLibrary } = get()
        const library = allBooks.filter(
          (book) => !toReadLibrary.find((b) => b.isbn === book.isbn)
        )

        set({ library })
      },
      setFilters: (filterName, value) => {
        set((state) => ({ filters: { ...state.filters, [filterName]: value } }))
      },
      addToReadLibrary: (book) => {
        set((state) => ({
          library: state.library.filter((b) => b.isbn !== book.isbn),
          toReadLibrary: [...state.toReadLibrary, book]
        }))
      },
      removeFromReadLibrary: (book) => {
        set(
          (state) => ({
            library: [...state.library, book],
            toReadLibrary: state.toReadLibrary.filter(
              (b) => b.isbn !== book.isbn
            )
          })
        )
      }
    }),
    {
      name: 'library'
    }
  )
)
