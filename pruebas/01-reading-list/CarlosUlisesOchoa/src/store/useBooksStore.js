import { create } from 'zustand'
import persist from '@/utils/persist'
import { books } from '@/const/books'

const DEFAULT_DATA = books

export const useBooksStore = create(
  persist(
    {
      key: 'books',
      getStorage: () => localStorage,
    },
    (set) => ({
      books: DEFAULT_DATA,
      removeBookFromList: (book) => {
        set((state) => ({
          books: state.books.filter((item) => item.ISBN !== book.ISBN),
        }))
      },
      clearList: () => {
        set(() => ({
          books: [],
        }))
      },
    })
  )
)
