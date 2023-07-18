import { createContext, useState } from 'react'

export const BookListContext = createContext()

export function BookListProvider ({ children }) {
  const [bookList, setBookList] = useState([])

  const addBook = ({ value }) => {
    setBookList([...bookList, value])
  }

  const removeBook = ({ book }) => {
    const newBookList = bookList.filter((item) => {
      return item.ISBN !== book.ISBN
    })
    setBookList(newBookList)
  }
  return (
        <BookListContext.Provider value={{ bookList, addBook, removeBook }}>
            {children}
        </BookListContext.Provider>
  )
}
