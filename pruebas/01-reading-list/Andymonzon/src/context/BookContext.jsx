import { createContext, useEffect, useState } from 'react'
import books from '../../../books.json'

export const BookContext = createContext()

const BookLibrary = books.library

export const BookContextProvider = ({ children }) => {
  // el bookInListSave guarda los libors que se van agregando,
  // para que cuando se filtre no se pierdan los libros que ya estaban en la lista
  const [bookInListSave, setBookInListSave] = useState([])
  const [bookInList, setBookInList] = useState([])
  const [book, setBook] = useState(BookLibrary)

  const [filterGenre, setFilterGenre] = useState('')
  const [filterPage, setFilterPage] = useState(0)

  // seteo los valores de bookInListSave a bookInList cada vez que cambia el bookInListSave
  useEffect(() => {
    setBookInList(bookInListSave)
  }, [bookInListSave])

  useEffect(() => {
    // si hay items en el localStorage, los guardo en bookInListSave
    const storedBookList = localStorage.getItem('bookList')
    if (storedBookList) {
      setBookInListSave(JSON.parse(storedBookList))
    }
  }, [])

  // filter
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

  useEffect(() => {
    if (filterPage && !filterGenre) {
      return (
        setBook(BookLibrary.filter(bookGenre => bookGenre.book.pages >= filterPage)),
        setBookInList(bookInListSave.filter(bookGenre => bookGenre.pages >= filterPage))
      )
    }

    if (filterPage && filterGenre) {
      return (
        setBook(BookLibrary.filter(bookPage => bookPage.book.pages >= filterPage && bookPage.book.genre === filterGenre)),
        setBookInList(bookInListSave.filter(bookPage => bookPage.pages >= filterPage && bookPage.genre === filterGenre))
      )
    }

    return (
      setBook(BookLibrary),
      setBookInList(bookInListSave)
    )
  }, [filterPage])

  return (
  <BookContext.Provider value={{
    bookInList,
    setBookInList,
    setBook,
    book,
    setFilterGenre,
    filterGenre,
    setBookInListSave,
    bookInListSave,
    setFilterPage,
    filterPage
  }}>
    {children}
  </BookContext.Provider>
  )
}
