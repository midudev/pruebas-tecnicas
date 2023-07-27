"use client"
import useLibraryContext from '@context/useLibraryContext'
import LibraryContext from '@context/LibraryContext'
import { ContextProps } from '@typesFiles/props/context'

const TaskProvider = ({ children } : ContextProps) => {
  const {
    books,
    readingList,
    genres,
    howManyBooksAre,
    maxAndMinPages,
    addBooksToReadingList,
    removeBooksFromReadingList,
    filterBooks
  } = useLibraryContext()

  return (
    <LibraryContext.Provider value={{ books, readingList, genres, howManyBooksAre, maxAndMinPages, addBooksToReadingList, removeBooksFromReadingList, filterBooks }}>
      {children}
    </LibraryContext.Provider>
  )
}

export default TaskProvider
