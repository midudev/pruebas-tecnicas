import { createContext, useState } from 'react'
import { getReadingList } from '../services/books.service'

export const ReadingListContext = createContext()

export function ReadingListProvider ({ children }) {
  const [readingList, setReadingList] = useState(getReadingList())
  return (
    <ReadingListContext.Provider value={{ readingList, setReadingList }}>
      {children}
    </ReadingListContext.Provider>
  )
}
