import { createContext, useEffect } from 'react'
import useBooks from '../hooks/useBooks'
import useLocalStorage from '../hooks/useLocalStorage'

export const BooksContext = createContext()

export default function BooksProvider ({ children }) {
  const { books, booksFilter } = useBooks()
  const [userReadingList, setUserReadingList] = useLocalStorage('userReadingList')

  useEffect(() => {
    const handleStorageEvent = (e) => {
      if (e.key === 'userReadingList') {
        setUserReadingList(JSON.parse(e.newValue))
      }
      if (e.key === 'availableBooks') {
        books.setBooks(JSON.parse(e.newValue))
      }
    }
    window.addEventListener('storage', handleStorageEvent)

    return () => window.removeEventListener('storage', handleStorageEvent)
  }, [])

  return (
    <BooksContext.Provider value={{
      booksFilter,
      books,
      readingList: {
        userReadingList,
        setUserReadingList
      },
      counter: {
        availableBooksCounter: books.availableBooks.length,
        readingListCounter: userReadingList.length
      }
    }}>
        {children}
    </BooksContext.Provider>
  )
}
