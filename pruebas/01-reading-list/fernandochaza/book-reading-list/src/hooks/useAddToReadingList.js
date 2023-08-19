import { useCallback, useEffect, useState } from 'react'

import { useAtom } from 'jotai'
import { userReadingList } from '../context/atoms'

import { updateReadingList } from '../Utils/updateReadingList'

export function useAddToReadingList(bookData) {
  const [isInReadingList, setIsInReadingList] = useState()
  const [readingList, setReadingList] = useAtom(userReadingList)

  useEffect(() => {
    const isInReadingList = readingList.some((book) => book.id === bookData.id)
    setIsInReadingList(isInReadingList)
  }, [bookData, readingList])

  const handleAddBookToGlobal = useCallback(
    (bookData) => {
      const isInReadingList = readingList.some(
        (book) => book.id === bookData.id
      )
      if (!isInReadingList) {
        setReadingList((prev) => [...prev, bookData])
      } else {
        setReadingList((books) => [
          ...books.filter((book) => book.id !== bookData.id)
        ])
      }
    },
    [setReadingList, readingList]
  )

  const handleAddBook = useCallback(
    (bookData) => {
      handleAddBookToGlobal(bookData)
      updateReadingList(bookData)
      setIsInReadingList((prev) => !prev)
    },
    [handleAddBookToGlobal]
  )

  return { handleAddBook, isInReadingList }
}
