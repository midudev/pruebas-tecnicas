import { createContext, useState } from 'react'

export const ReadingListContext = createContext()

export function ReadingListProvider ({ children }) {
  const [list, setList] = useState([])

  const addToList = book => {
    const bookInListIndex = list.findIndex(item => item.book.ISBN === book.book.ISBN)
    console.log(bookInListIndex)
    if (bookInListIndex >= 0) {
      return
    }
    setList(prevState => ([
      ...prevState,
      {
        ...book
      }
    ]))
  }
  const removeFromList = book => {
    setList(prevState => prevState.filter(item => item.book.ISBN !== book.book.ISBN))
  }
  const clearList = () => {
    setList([])
  }
  return (
    <ReadingListContext.Provider value={{
      list,
      addToList,
      removeFromList,
      clearList
    }}>
        {children}
    </ReadingListContext.Provider>
  )
}
