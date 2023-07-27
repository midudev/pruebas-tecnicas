import { create } from 'zustand'
import { libraryInt } from '../types/book'

import library from '../data/book.json'

interface BookAddInterface {
  book: libraryInt
  addAllBook: () => void
  removeAllBook: () => void
}

export const useStoreLibrary = create<BookAddInterface>((set) => ({
  book: { library: library.library },
  addAllBook: () => set(() => ({ book: { library: library.library } })),
  removeAllBook: () => set(() => ({ book: { library: [] } }))
}))
