import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import dataBooks from '../data/books.json'

export interface LibraryProps {
  book: BookProps
}

export interface BookProps {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: AuthorProps
}

export interface AuthorProps {
  name: string
  otherBooks: string[]
}

interface BookState {
  availableBooks: LibraryProps[]
  listedBooks: LibraryProps[]
  order: string
  category: string
  pages: number
  setAvailableBooks: (state: LibraryProps[]) => void
  addListedBook: (state: LibraryProps) => void
  addCompleteList: (state: LibraryProps[]) => void
  setOrder: (state: string) => void
  setCategory: (state: string) => void
  setPages: (state: number) => void
}

interface ListedState {
  listedIds: string[]
  addListedId: (state: string) => void
  addNewList: (state: string[]) => void
}

export const useListedBooks = create<ListedState>()(
  persist(
    set => ({
      listedIds: [],

      addListedId: value =>
        set(prev => ({
          listedIds: [...prev.listedIds, value]
        })),

      addNewList: value =>
        set(() => ({
          listedIds: value
        }))
    }),
    {
      name: 'listed-storage'
    }
  )
)

export const useBooks = create<BookState>(set => ({
  availableBooks: dataBooks.library,
  listedBooks: [],
  order: '',
  category: '',
  pages: 0,

  setAvailableBooks: value =>
    set(() => ({
      availableBooks: value
    })),

  addListedBook: value =>
    set(prev => ({
      listedBooks: [...prev.listedBooks, value]
    })),

  addCompleteList: value =>
    set(() => ({
      listedBooks: value
    })),

  setOrder: value =>
    set(() => ({
      order: value
    })),

  setCategory: value =>
    set(() => ({
      category: value
    })),

  setPages: value =>
    set(() => ({
      pages: value
    }))
}))
