import { createContext, useContext } from 'react'
import { BooksContext } from './BooksContext'

export const UserContext = createContext()

export default function UserProvider ({ children }) {
  const { books, readingList } = useContext(BooksContext)

  const addToReadingList = (book) => {
    readingList.setUserReadingList(prevUserListBooks => addData(prevUserListBooks, book, 'userReadingList'))
    books.setBooks(prevAvailableBooks => updateData(prevAvailableBooks, book, 'availableBooks'))
  }

  const deleteToReadingList = (book) => {
    readingList.setUserReadingList(prevUserListBooks => updateData(prevUserListBooks, book, 'userReadingList'))
    books.setBooks(prevAvailableBooks => addData(prevAvailableBooks, book, 'availableBooks'))
  }

  return (
        <UserContext.Provider value={{
          addToReadingList,
          deleteToReadingList
        }}>
            {children}
        </UserContext.Provider>
  )
}

const addData = (prevData, book, item) => {
  const updatedUserListBooks = [...prevData, book]
  localStorage.setItem(item, JSON.stringify(updatedUserListBooks))
  return updatedUserListBooks
}

const updateData = (prevData, book, item) => {
  const updatedUserListBooks = prevData.filter(prevUserListBook => prevUserListBook.ISBN !== book.ISBN)
  localStorage.setItem(item, JSON.stringify(updatedUserListBooks))
  return updatedUserListBooks
}
