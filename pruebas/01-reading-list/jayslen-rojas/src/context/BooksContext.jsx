import { createContext, useState } from 'react'
import booksMocks from '../mocks/books.json'

export const BooksContext = createContext()

export function BooksProvider ({ children }) {
  const booksInStorage = JSON.parse(localStorage.getItem('books-storage'))
  const [books, setBooks] = useState(booksInStorage ?? booksMocks.library)
  const [storage, setStorage] = useState(booksMocks.library)

  const updateBooks = ({ isSaved, book }) => {
    // const newBooks = [...books]
    const index = booksMocks.library.findIndex(item => item.book.ISBN === book.ISBN)
    // booksMocks.library[index].book = isSaved
    const newBooks = storage
    newBooks[index].book.isSaved = isSaved
    newBooks.splice(index, 1, newBooks[index])
    setStorage(newBooks)
    // newBooks.splice(index, 1, )
    // newBooks[index].book.isSaved = isSaved
    // localStorage.setItem('books-storage', JSON.stringify(newBooks))
    // setBooks(newBooks)
  }
  const updateState = ({ value }) => {
    setBooks(value)
  }
  return (
        <BooksContext.Provider value={{ books, updateBooks, updateState, storage }}>
            {children}
        </BooksContext.Provider>
  )
}
