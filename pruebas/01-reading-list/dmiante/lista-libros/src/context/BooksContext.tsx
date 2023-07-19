import { PropsWithChildren, useState, createContext, useEffect } from 'react'
import type { Collection } from '../types/types.d.ts'
import { getAllBook } from '../services/data'

interface BookTypeContext {
  books: Collection[]
}

export const BookContext = createContext<BookTypeContext>({
  books: []
})

export function BooksProvider ({ children }: PropsWithChildren) {
  const [books, setBooks] = useState<Collection[]>([])

  useEffect(() => {
    const { library } = getAllBook()
    setBooks(library)
  }, [])

  return (
    <BookContext.Provider
      value={{
        books
      }}
    >
      {children}
    </BookContext.Provider>
  )
}
