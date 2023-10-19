import { useState } from 'react'
import { BookWrapper, type Book } from '../types/types'
import { BooksList } from './BooksList'
import { BooksTabs } from './BooksTabs'

interface Props {
  booksWrapper: BookWrapper[],
  addToReadingList: (book: Book) => void,
  removeFromReadingList: (book: Book) => void
}

export const BooksContainer = ({ booksWrapper, addToReadingList, removeFromReadingList }: Props) => {
  const [onlyAvailablesBooks, setOnlyAvailablesBooks] = useState(false)

  const toggleOnlyAvailableBooks = () => {
    setOnlyAvailablesBooks((value) => !value)
  }

  return (
    <>
        <BooksTabs
          booksWrapper={booksWrapper}
          onlyAvailablesBooks={onlyAvailablesBooks}
          toggleOnlyAvailableBooks={toggleOnlyAvailableBooks}
        />
        <BooksList
          booksWrapper={booksWrapper}
          onlyAvailablesBooks={onlyAvailablesBooks}
          addToReadingList={addToReadingList}
          removeFromReadingList={removeFromReadingList}
        />
    </>
  )
}
