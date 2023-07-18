import { createContext, useState } from 'react'
// import booksMock from '../mocks/books.json'

export const BookListContext = createContext()

export function BookListProvider ({ children }) {
  // const books = booksMock.library
  // const savedBooks = books.filter(item => item.book.isSaved === true)

  const [bookList, setBookList] = useState([])

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
