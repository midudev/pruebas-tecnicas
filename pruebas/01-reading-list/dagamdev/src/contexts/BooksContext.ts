import { createContext } from 'react'
import type { Book } from '@/utils/types'

export interface BooksData {
  books: Book[]
  updateBooks: (newBooks: Book[]) => void
}

export const BooksContext = createContext<BooksData | undefined>(undefined)