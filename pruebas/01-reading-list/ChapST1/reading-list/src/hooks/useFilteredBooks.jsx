/*
  Porque este custom hook?
*/

import { useRef } from 'react'
import { useBookZustandStore } from './useBookZustandStore'

export function useFilteredBooks () {
  const { books, readingList } = useBookZustandStore()
  const booksBackup = useRef()

  if (books.length > 0 && !booksBackup.current) {
    booksBackup.current = [...books]
  }

  const copyBooks = booksBackup.current ?? [...books]

  const newMapBooks = copyBooks.map(({ book }) => {
    if (readingList.length === 0) return { book }

    const currentBookId = book.ISBN
    const bookIsCopy = readingList.find(({ book }) => book.ISBN === currentBookId)

    if (bookIsCopy) return

    return { book }
  })

  const filteredBooks = newMapBooks.filter((item) => item !== undefined)

  return {
    filteredBooks
  }
}
