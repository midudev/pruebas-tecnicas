import { type Signal, component$ } from '@builder.io/qwik'
import { BookItem } from '../book-item/book-item'
import { type Book } from '~/types/types'
import { BooksListULStyles } from './styles'

const NUMBER_OF_BOOKS_PER_PAGE = 10

interface BooksListProps {
  booksFiltered?: Signal<Book[]>
}

export const BooksList = component$(({ booksFiltered }: BooksListProps) => {
  if (!booksFiltered) return null

  return (
    <ul data-cy="books-list" class={BooksListULStyles}>
      {booksFiltered.value.slice(0, NUMBER_OF_BOOKS_PER_PAGE).map((book) => (
        <li key={book.ISBN}>
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  )
})
