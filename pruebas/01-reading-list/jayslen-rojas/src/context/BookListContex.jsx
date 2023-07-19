import { createContext, useContext, useState } from 'react'
import { BooksContext } from './BooksContext'

export const BookListContext = createContext()

export function BookListProvider ({ children }) {
  const { storage } = useContext(BooksContext)
  const booksInStorage = JSON.parse(localStorage.getItem('books-storage'))
  const savedBookLocalStorage = booksInStorage && booksInStorage.filter(item => item.book.isSaved === true).map(item => item.book)
  const savedBooksStorage = storage.filter(item => item.book.isSaved === true).map(item => item.book)
  const [bookList, setBookList] = useState(savedBookLocalStorage ?? savedBooksStorage)

  // funcion para actulizar estado y evitar pasar la actualizacion del estado como prop
  const updateBookList = ({ value }) => {
    setBookList(value)
  }

  return (
        <BookListContext.Provider value={{ bookList, updateBookList }}>
            {children}
        </BookListContext.Provider>
  )
}
