import { useContext } from 'react'
import { ReadingListContext } from '../context/ReadingListContext'
import { updateReadingList } from '../services/books.service'

export function useBook ({ book }) {
  const { readingList, setReadingList } = useContext(ReadingListContext)
  const isInReadingList = readingList.find((readingBook) => readingBook.ISBN === book.ISBN)

  const toggleBook = () => {
    const newReadingList = isInReadingList ? readingList.filter((readingBook) => readingBook.ISBN !== book.ISBN) : [...readingList, book]
    setReadingList(newReadingList)
    updateReadingList(newReadingList)
  }

  return { isInReadingList, toggleBook }
}
