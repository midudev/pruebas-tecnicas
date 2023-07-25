import { useContext, useEffect, useState } from 'react'
import { filterBooks, getBooks, updateReadingList } from '../services/books.service'
import { ReadingListContext } from '../context/ReadingListContext'
import { FiltersContext } from '../context/FiltersContext'

export function useBookList () {
  const [books, setBooks] = useState(getBooks())
  const { readingList, setReadingList } = useContext(ReadingListContext)
  const { filters } = useContext(FiltersContext)

  useEffect(() => {
    setBooks(filterBooks(filters).filter((book) => !readingList.find((readingBook) => readingBook.ISBN === book.ISBN)))
  }, [filters, readingList])

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return

    const sourceDroppableId = source.droppableId
    const destinationDroppableId = destination.droppableId

    const sourceIndex = source.index - 1
    const destinationIndex = destination.index - 1

    if (sourceDroppableId === 'catalog' && destinationDroppableId === 'catalog') return

    const newBooks = structuredClone(books)
    const newReadingList = structuredClone(readingList)

    if (sourceDroppableId === 'catalog' && destinationDroppableId === 'reading') {
      const [bookToMove] = newBooks.splice(sourceIndex, 1)
      newReadingList.splice(destinationIndex, 0, bookToMove)
      setBooks(newBooks)
      setReadingList(newReadingList)
      updateReadingList(newReadingList)
    }

    if (sourceDroppableId === 'reading' && destinationDroppableId === 'catalog') {
      const [bookToMove] = newReadingList.splice(sourceIndex, 1)
      newBooks.splice(destinationIndex, 0, bookToMove)
      setBooks(newBooks)
      setReadingList(newReadingList)
      updateReadingList(newReadingList)
    }

    if (sourceDroppableId === 'reading' && destinationDroppableId === 'reading') {
      const [bookToMove] = newReadingList.splice(sourceIndex, 1)
      newReadingList.splice(destinationIndex, 0, bookToMove)
      setReadingList(newReadingList)
      updateReadingList(newReadingList)
    }
  }

  return { books, readingList, handleDragEnd }
}
