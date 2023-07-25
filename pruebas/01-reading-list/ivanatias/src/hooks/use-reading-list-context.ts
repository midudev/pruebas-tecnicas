import { useState, useEffect, useCallback } from 'react'
import { useBooks } from './use-books'
import type { BooksList } from '@/utils/books'

export function useReadingListContext(storageKey: string) {
  const [readingList, setReadingList] = useState<BooksList>(() => {
    const storedReadingList = window.localStorage.getItem(storageKey)

    return storedReadingList === null
      ? []
      : (JSON.parse(storedReadingList) as BooksList)
  })

  const [readingListOpen, setReadingListOpen] = useState(false)

  const { books } = useBooks()

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === storageKey) {
        const newReadingList = JSON.parse(event.newValue ?? '[]') as BooksList
        setReadingList(newReadingList)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [storageKey])

  const checkIfBookInReadingList = useCallback(
    (ISBN: string) => {
      return Boolean(readingList.find(book => book.ISBN === ISBN))
    },
    [readingList]
  )

  const removeFromReadingList = useCallback(
    (ISBN: string) => {
      const newReadingList = readingList.filter(book => book.ISBN !== ISBN)

      window.localStorage.setItem(storageKey, JSON.stringify(newReadingList))
      setReadingList(newReadingList)
    },
    [readingList, storageKey]
  )

  const addToReadingList = useCallback(
    (ISBN: string) => {
      const bookToAdd = books.find(book => book.ISBN === ISBN)

      if (bookToAdd === undefined) return

      const newReadingList = [...readingList, bookToAdd]

      window.localStorage.setItem(storageKey, JSON.stringify(newReadingList))
      setReadingList(newReadingList)
    },
    [books, readingList, storageKey]
  )

  const toggleReadingList = useCallback(() => {
    setReadingListOpen(prev => !prev)
  }, [])

  const readingListCount = readingList.length

  return {
    readingList,
    readingListCount,
    readingListOpen,
    toggleReadingList,
    removeFromReadingList,
    addToReadingList,
    checkIfBookInReadingList
  }
}
