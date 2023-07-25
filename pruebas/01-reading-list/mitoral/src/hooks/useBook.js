import { useContext } from 'react'
import { ReadingListContext } from '../context/ReadingListContext'

export function useBook ({ book }) {
  const { readingList, setReadingList } = useContext(ReadingListContext)
  const isInReadingList = readingList.find((readingBook) => readingBook.ISBN === book.ISBN)

  const toggleBook = () => {
    isInReadingList
      ? setReadingList(readingList.filter((readingBook) => readingBook.ISBN !== book.ISBN))
      : setReadingList([...readingList, book])
  }

  return { isInReadingList, toggleBook }
}
