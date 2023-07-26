import { createContext, useContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [userList, setUserList] = useState([])

  // Tracking data in local storage
  //-----------------------------------------------------------------
  const bookListInLocalStorage = localStorage.getItem("userList")

  // Retrieve books from localStorage
  useEffect(() => {
    if (bookListInLocalStorage) {
      setUserList(JSON.parse(bookListInLocalStorage))
    }
  }, [])

  // Sync bookList with localStorage when changin state
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList))
  }, [userList])

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

  return (
    <UserContext.Provider value={{ userList, addBook, removeBook }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
