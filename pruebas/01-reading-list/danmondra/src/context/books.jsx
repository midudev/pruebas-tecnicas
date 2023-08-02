import { createContext } from 'react'
import books from '../mocks/newBooks.json'

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
  // TODO --- Map response in JSON
  const mappedBooks = books.library.map(({ book }) => book)

  return (
    <BooksContext.Provider
      value={{ books: mappedBooks }}
    >
      {children}
    </BooksContext.Provider>
  )
}
