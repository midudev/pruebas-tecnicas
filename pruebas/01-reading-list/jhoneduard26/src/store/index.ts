import { create } from 'zustand'

import { type Book } from '../types'
import { createJSONStorage, persist } from 'zustand/middleware'

window.addEventListener('storage', (event) => {
  if (event.key === 'books-storage') {
    window.location.reload()
  }
})

interface ReadListStore {
  booksForRead: Book[]
  addBook: (book: Book) => void
  removeBook: (isbn: string) => void
}

export const useReadListStore = create<ReadListStore>()(
  persist(
    (set) => ({
      booksForRead: [],
      addBook: (book) => { set((state) => ({ booksForRead: [...state.booksForRead, book] })) },
      removeBook: (isbn) => { set((state) => ({ booksForRead: state.booksForRead.filter((b) => b.ISBN !== isbn) })) }
    }),
    {
      name: 'books-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
