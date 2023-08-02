import { BookWrapper, type Book } from '../types/types'
import { BookItem } from './BookItem'

interface Props {
  booksWrapper: BookWrapper[],
  onlyAvailablesBooks: boolean,
  addToReadingList: (book: Book) => void,
  removeFromReadingList: (book: Book) => void
}

export const BooksList = ({ booksWrapper, onlyAvailablesBooks, addToReadingList, removeFromReadingList }: Props) => {
  const booksList = onlyAvailablesBooks
    ? booksWrapper.filter(booksWrapper => !booksWrapper.inReadingList)
    : booksWrapper

  if (booksList.length === 0) {
    return (
      <p className='p-4 text-center font-light text-neutral-400'>
        No hay resultados
      </p>
    )
  }

  return (
    <section className='p-4 grid grid-cols-auto-fill-12 gap-8 rounded-b-md overflow-y-auto'>
      {booksList.map(({ book, inReadingList }) => {
        return (
          <BookItem
            key={book.ISBN}
            book={book}
            addToReadingList={addToReadingList}
            removeFromReadingList={removeFromReadingList}
            inReadingList={inReadingList}
          />
        )
      })}
    </section>
  )
}
