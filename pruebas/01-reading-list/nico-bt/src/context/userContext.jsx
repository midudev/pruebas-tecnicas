import { createContext, useContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [userList, setUserList] = useState([])
  const [availableBooks, setAvailableBooks] = useState()
  const [dontChangeLocalStorage, setDontChangeLocalStorage] = useState(false) //flag for storage event and sync tabs to avoid infinite loop

  // Tracking data in local storage
  //-----------------------------------------------------------------

  // Retrieve books from localStorage
  useEffect(() => {
    const bookListInLocalStorage = localStorage.getItem("userList")
    if (bookListInLocalStorage) {
      setUserList(JSON.parse(bookListInLocalStorage))
    }
  }, [])

  // Sync bookList with localStorage when changin state
  useEffect(() => {
    if (dontChangeLocalStorage) {
      return
    }

    localStorage.setItem("userList", JSON.stringify(userList))
  }, [userList])

  // Event 'storage', sync storage between tabs
  useEffect(() => {
    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  function handleStorageChange(event) {
    const newUserListInOtherTab = JSON.parse(event.newValue)
    setDontChangeLocalStorage(true)
    setUserList(newUserListInOtherTab)
    setTimeout(() => {
      setDontChangeLocalStorage(false)
    }, 222)
  }

  // Actions
  //-----------------------------------------------------------------
  const addBook = (item) => {
    const bookAlreadyInList = userList.find((book) => book.ISBN === item.ISBN)

    if (bookAlreadyInList) return

    setUserList((prevState) => [...prevState, item])
  }

  const removeBook = (item) => {
    setUserList((prevState) => prevState.filter((book) => book.ISBN !== item.ISBN))
  }

  const setNumberOfAvailableBooks = (bookListLength) => {
    setAvailableBooks(bookListLength - userList.length)
  }

  return (
    <UserContext.Provider
      value={{ userList, addBook, removeBook, setNumberOfAvailableBooks, availableBooks }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
