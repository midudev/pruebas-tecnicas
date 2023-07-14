import { createContext, useEffect, useState } from 'react'
import books from '../../../books.json'

export const BookContext = createContext()

const BookLibrary = books.library

export const BookContextProvider = ({ children }) => {
  const [bookInListSave, setBookInListSave] = useState([])
  const [bookInList, setBookInList] = useState([])
  const [book, setBook] = useState(BookLibrary)
  const [filterGenre, setFilterGenre] = useState('')

  useEffect(() => {
    setBookInList(bookInListSave)
  }, [bookInListSave])

  useEffect(() => {
    if (filterGenre) {
      return (
        setBook(BookLibrary.filter(bookGenre => bookGenre.book.genre === filterGenre)),
        setBookInList(bookInListSave.filter(bookGenre => bookGenre.genre === filterGenre))
      )
    }
    return (
      setBook(BookLibrary),
      setBookInList(bookInListSave)
    )
  }, [filterGenre])

  return (
  <BookContext.Provider value={{
    bookInList,
    setBookInList,
    setBook,
    book,
    setFilterGenre,
    filterGenre,
    setBookInListSave,
    bookInListSave
  }}>
    {children}
  </BookContext.Provider>
  )
}
