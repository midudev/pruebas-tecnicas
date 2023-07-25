import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { Book } from '@/utils/types'

export interface ReadingBooks {
  readingBooks: Book[]
  addBook: (newBook: Book) => void
  removeBook: (bookISBN: string) => void
  openList: boolean
  setOpenList: Dispatch<SetStateAction<boolean>>
}

export const ReadingBooksContext = createContext<ReadingBooks | undefined>(undefined)