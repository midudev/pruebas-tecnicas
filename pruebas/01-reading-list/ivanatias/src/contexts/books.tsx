import { createContext } from 'react'
import { getBooks, getPagesNumberLimit, type BooksList } from '@/utils/books'

interface BooksContextType {
  books: BooksList
  maxPages: number
  minPages: number
}

export const BooksContext = createContext<BooksContextType | undefined>(
  undefined
)

interface Props {
  children: React.ReactNode
}

export default function BooksProvider({ children }: Props) {
  const books = getBooks()

  const maxPages = getPagesNumberLimit(books, 'max')
  const minPages = getPagesNumberLimit(books, 'min')

  const value = {
    books,
    maxPages,
    minPages
  }

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}
