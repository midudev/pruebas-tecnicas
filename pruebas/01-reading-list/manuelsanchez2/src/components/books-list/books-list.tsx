import { type Signal, component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'
import { BookItem } from '../book-item/book-item'
import { type Book } from '~/types/types'

const NUMBER_OF_BOOKS_PER_PAGE = 8

interface BooksListProps {
  booksFiltered: Signal<Book[]>
}

export const BooksList = component$(({ booksFiltered }: BooksListProps) => {
  return (
    <ul
      class={css({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        gap: '3rem',
        width: '100%',
        maxWidth: '1000px',
        flex: 1,
        lg: {
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          margin: '0',
          width: '1000px',
        },
      })}
    >
      {booksFiltered.value.slice(0, NUMBER_OF_BOOKS_PER_PAGE).map((book) => (
        <li key={book.ISBN}>
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  )
})
