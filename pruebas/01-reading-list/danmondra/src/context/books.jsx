import { createContext, useEffect, useState } from 'react'
import mockedBooks from '../mocks/newBooks.json'

export const BooksContext = createContext()

async function getBooks() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockedBooks)
    }, 900)
  })
}

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    // TODO --- Try with IIFE
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

  // get all genres here
  //
  // get book with more pages here

  return (
    <BooksContext.Provider
      value={{ books }}
    >
      {children}
    </BooksContext.Provider>
  )
}
