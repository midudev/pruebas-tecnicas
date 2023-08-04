import { create } from 'zustand'
import persist from '@/utils/persist'
import { books } from '@/const/books'

const DEFAULT_DATA = JSON.parse(localStorage.getItem('books')) || books || []

export const useBooksStore = create(
  persist(
    {
      key: 'books',
      getStorage: () => localStorage,
    },
    (set) => ({
      books: DEFAULT_DATA,
      // Add a function to update the books array and persist it to localStorage
      setBooks: (newBooks) => {
        set({ books: newBooks })
        localStorage.setItem('books', JSON.stringify(newBooks))
      },
    })
  )
)
