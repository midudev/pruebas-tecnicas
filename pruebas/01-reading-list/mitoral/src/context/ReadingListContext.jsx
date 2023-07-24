import { createContext, useState } from 'react'

export const ReadingListContext = createContext()

export function ReadingListProvider ({ children }) {
  const [readingList, setReadingList] = useState([])
  return (
    <ReadingListContext.Provider value={{ readingList, setReadingList }}>
      {children}
    </ReadingListContext.Provider>
  )
}
