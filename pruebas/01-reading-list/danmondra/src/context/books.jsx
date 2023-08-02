import { createContext } from 'react'
import books from '../mocks/newBooks.json'

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
  const mappedBooks = books.library.map(({ book }) => {
    return {
      title: book.title,
      pages: book.pages,
      genre: book.genre,
      cover: book.cover,
      synopsis: book.synopsis,
      year: book.year,
      ISBN: book.ISBN,
      author: {
        name: book.author.name,
        otherBooks: book.author.otherBooks
      }
    }
  })

  return (
    <BooksContext.Provider
      value={{ books: mappedBooks }}
    >
      {children}
    </BooksContext.Provider>
  )
}
