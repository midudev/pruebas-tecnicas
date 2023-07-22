import { memo } from 'react'
import BookCard from '@/components/book-card'
import type { BooksList as BooksListType } from '@/utils/books'

export interface Props {
  books: BooksListType
  className?: string
}

const defaultStyle =
  'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'

const BooksList = memo(function BooksList({ books, className }: Props) {
  return (
    <ul className={className ?? defaultStyle}>
      {books.map(book => (
        <li key={book.ISBN}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  )
})

export default BooksList
