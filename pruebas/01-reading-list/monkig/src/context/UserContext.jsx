import { createContext, useContext, useEffect, useState } from 'react'
import { BooksContext } from './BooksContext'

export const UserContext = createContext()

export default function UserProvider ({ children }) {
  const { userReadingList, setAvailableBooks, setUserReadingList } = useContext(BooksContext)
  const [readingListCounter, setReadingListCounter] = useState(userReadingList.length)

  useEffect(() => {
    setReadingListCounter(userReadingList.length)
  }, [userReadingList])

  const addToReadingList = (book) => {
    setUserReadingList(prevUserListBooks => addData(prevUserListBooks, book, 'userReadingList'))
    setAvailableBooks(prevAvailableBooks => updateData(prevAvailableBooks, book, 'availableBooks'))
  }

  const deleteToReadingList = (book) => {
    setAvailableBooks(prevAvailableBooks => addData(prevAvailableBooks, book, 'availableBooks'))
    setUserReadingList(prevUserListBooks => updateData(prevUserListBooks, book, 'userReadingList'))
  }

  return (
        <UserContext.Provider value={{
          addToReadingList,
          deleteToReadingList,
          readingListCounter
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
