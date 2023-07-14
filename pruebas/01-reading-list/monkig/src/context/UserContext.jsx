import { createContext, useEffect, useState } from 'react'
import useBooks from '../hooks/useBooks'
import useLocalStorage from '../hooks/useLocalStorage'

export const UserContext = createContext()

export default function UserProvider ({ children }) {
  const { availableBooks, setAvailableBooks } = useBooks()
  const [userReadingList, setUserReadingList] = useState([])
  const [readingListCounter, setReadingListCounter] = useState(userReadingList.length)
  useLocalStorage('userReadingList', setUserReadingList)

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
          availableBooks,
          userReadingList,
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
  localStorage.setItem('userReadingList', JSON.stringify(updatedUserListBooks))
  return updatedUserListBooks
}

const updateData = (prevData, book, item) => {
  const updatedUserListBooks = prevData.filter(prevUserListBook => prevUserListBook.ISBN !== book.ISBN)
  localStorage.setItem(item, JSON.stringify(updatedUserListBooks))
  return updatedUserListBooks
}
