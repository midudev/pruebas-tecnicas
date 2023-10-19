import { useCallback, useEffect, useState } from 'react'

import { useAtom } from 'jotai'
import { userCompletedBooks, userReadingList } from '../context/atoms'

import { toast } from 'sonner'

import { updateReadingList } from '../Utils/updateReadingList'
import { updateCompletedBooks } from '../Utils/updateCompletedBooks'

export function useAddToReadingList(bookData) {
  const [isInReadingList, setIsInReadingList] = useState()
  const [readingList, setReadingList] = useAtom(userReadingList)
  const [completedBooks, setCompletedBooks] = useAtom(userCompletedBooks)

  useEffect(() => {
    const isBookInReadingList = readingList.some(
      (book) => book.id === bookData.id
    )
    setIsInReadingList(isBookInReadingList)
  }, [bookData, readingList])

  const handleAddBookToGlobal = useCallback(
    (bookData) => {
      const { title } = bookData.volumeInfo
      const { id } = bookData

      const isCurrentInReadingList = readingList.some(
        (book) => book.id === bookData.id
      )

      const isCompleted = completedBooks.some((book) => book.id === id)

      if (!isCurrentInReadingList) {
        setReadingList((prev) => [...prev, bookData])
        setIsInReadingList((prev) => !prev)

        toast.success(`${title} was added to your reading list`)

        if (isCompleted) {
          setCompletedBooks((books) => books.filter((book) => book.id !== id))
          updateCompletedBooks(bookData)
        }
      } else {
        setReadingList((books) => books.filter((book) => book.id !== id))

        toast.error(`${title} was removed from your reading list`)
      }
    },
    [setReadingList, readingList, setCompletedBooks, completedBooks]
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
