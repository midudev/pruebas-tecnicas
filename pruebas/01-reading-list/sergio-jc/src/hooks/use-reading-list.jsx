import { booksContext } from '@context/constants'
import { useContext } from 'react'

export function useReadingList () {
  const { readingList, addBookToReadingList, removeBookToReadingList } = useContext(booksContext)
  return { readingList, addBookToReadingList, removeBookToReadingList }
}
