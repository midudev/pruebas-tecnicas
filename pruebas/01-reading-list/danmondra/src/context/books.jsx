import { createContext, useEffect, useState } from 'react'
import { getBooks } from '../services/books'

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const initBooks = async () => {
      const prueba = await getBooks()

      const mappedBooks = prueba?.library?.map(({ book }) => {
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

      setBooks(mappedBooks)
    }

    initBooks()
  }, [])

  return (
    <BooksContext.Provider
      value={{ books }}
    >
      {children}
    </BooksContext.Provider>
  )
}
