import { useState } from 'react'
import { useBooks } from '@/hooks/use-books'
import { useSyncStorage } from '@/hooks/use-sync-storage'
import type { BooksList } from '@/utils/books'

const defaultState: BooksList = []

export function useReadingListContext(storageKey: string) {
  const [readingList, setReadingList] = useState<BooksList>(() => {
    const storedReadingList = window.localStorage.getItem(storageKey)

    return storedReadingList === null
      ? defaultState
      : (JSON.parse(storedReadingList) as BooksList)
  })

  const [readingListOpen, setReadingListOpen] = useState(false)

  const { books } = useBooks()

  useSyncStorage(storageKey, defaultState, setReadingList)

  const checkIfBookInReadingList = (ISBN: string) => {
    return Boolean(readingList.find(book => book.ISBN === ISBN))
  }

  const removeFromReadingList = (ISBN: string) => {
    const newReadingList = readingList.filter(book => book.ISBN !== ISBN)

    window.localStorage.setItem(storageKey, JSON.stringify(newReadingList))
    setReadingList(newReadingList)
  }

  const addToReadingList = (ISBN: string) => {
    const bookToAdd = books.find(book => book.ISBN === ISBN)

    if (bookToAdd === undefined) return

    const newReadingList = [...readingList, bookToAdd]

    window.localStorage.setItem(storageKey, JSON.stringify(newReadingList))
    setReadingList(newReadingList)
  }

  const toggleReadingList = () => {
    setReadingListOpen(prev => !prev)
  }

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
