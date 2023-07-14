import { createContext, useState } from 'react'
import books from '../../../books.json'

export const BookContext = createContext()

const BookLibrary = books.library

export const BookContextProvider = ({ children }) => {
  const [bookInList, setBookInList] = useState([])
  const [book, setBook] = useState(BookLibrary)
  const [filterGenre, setFilterGenre] = useState('')

  return (
        <BookContext.Provider value={{
          bookInList,
          setBookInList,
          setBook,
          book,
          setFilterGenre,
          filterGenre
        }}>
            {children}
        </BookContext.Provider>
  )
}
