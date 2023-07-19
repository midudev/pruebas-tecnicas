import { createContext, useState } from 'react'

export const BookListContext = createContext()

export function BookListProvider ({ children }) {
  const booksInStorage = JSON.parse(localStorage.getItem('books-storage'))
  const savedBook = booksInStorage && booksInStorage.filter(item => item.book.isSaved === true).map(item => item.book)

  const [bookList, setBookList] = useState(savedBook ?? [])

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
