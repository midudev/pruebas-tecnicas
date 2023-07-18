import { createContext, useState } from 'react'
import booksMocks from '../mocks/books.json'

export const BooksContext = createContext()

export function BooksProvider ({ children }) {
  const [books, setBooks] = useState(booksMocks.library)

  const updateBooks = ({ isSaved, book }) => {
    const newBooks = [...books]
    const index = newBooks.findIndex(item => item.book.ISBN === book.ISBN)
    newBooks[index].book.isSaved = isSaved
    setBooks(newBooks)
  }
  return (
        <BooksContext.Provider value={{ books, updateBooks }}>
            {children}
        </BooksContext.Provider>
  )
}
