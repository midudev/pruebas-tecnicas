import { useState, useEffect, useCallback } from 'react'
import { useAtom } from 'jotai'
import { userCompletedBooks, userReadingList } from '../context/atoms'

import { toast } from 'sonner'

import { updateCompletedBooks } from '../Utils/updateCompletedBooks'
import { updateReadingList } from '../Utils/updateReadingList'

export function useAddToCompletedBooks(bookData) {
  const [isCompleted, setIsCompleted] = useState()
  const [completedBooks, setCompletedBooks] = useAtom(userCompletedBooks)
  const [readingList, setReadingList] = useAtom(userReadingList)

  useEffect(() => {
    const isBookInList = completedBooks?.some((book) => book.id === bookData.id)
    setIsCompleted(isBookInList)
  }, [bookData, completedBooks])

  const handleCompletedBook = useCallback(
    (bookData) => {
      const { title } = bookData.volumeInfo
      const isBookCompleted = completedBooks.some(
        (book) => book.id === bookData.id
      )
      const isInReadingList = readingList.some(
        (book) => book.id === bookData.id
      )
      if (!isBookCompleted) {
        setCompletedBooks((prev) => [...prev, bookData])
        toast.success(`Good job! ${title} was added to your read titles!`)

        if (isInReadingList) {
          setReadingList((books) =>
            books.filter((book) => book.id !== bookData.id)
          )
          updateReadingList(bookData)
        }
      } else {
        setCompletedBooks((books) =>
          books.filter((book) => book.id !== bookData.id)
        )
      }
      updateCompletedBooks(bookData)
    },
    [setCompletedBooks, completedBooks, setReadingList, readingList]
  )

  return { handleCompletedBook, isCompleted }
}
