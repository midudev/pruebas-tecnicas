import { component$, useComputed$ } from '@builder.io/qwik'
import { BookItem } from '../book-item/book-item'
import { BooksListULStyles } from './styles'
import { css } from '~/styled-system/css'
import { useGlobalState } from '~/ctx/ctx'
import { DEFAULT_GENRE } from '~/constants/constants'
import { filterBooksByGenre, filterBooksByTitle } from '~/functions/functions'

const NUMBER_OF_BOOKS_PER_PAGE = 10

export const BooksList = component$(() => {
  const { booksWithUserPreferences, filters } = useGlobalState()

  const booksFiltered = useComputed$(() => {
    if (booksWithUserPreferences.value.length === 0) return []
    // Filtro por género
    let booksFiltered =
      filters.genre === DEFAULT_GENRE
        ? booksWithUserPreferences.value
        : filterBooksByGenre(booksWithUserPreferences.value, filters.genre)

    // Filtro por título
    booksFiltered =
      filters.title === ''
        ? booksFiltered
        : filterBooksByTitle(booksWithUserPreferences.value, filters.title)

    // Filtro por número de páginas
    booksFiltered = booksFiltered.filter(
      (book) => book.pages <= filters.numberOfPages
    )

    return booksFiltered
  })

  return (
    <ul data-cy="books-list" class={BooksListULStyles}>
      {booksFiltered.value.length > 0 ? (
        booksFiltered.value.slice(0, NUMBER_OF_BOOKS_PER_PAGE).map((book) => (
          <li key={book.ISBN}>
            <BookItem book={book} />
          </li>
        ))
      ) : (
        <li
          class={css({
            fontSize: '1.25rem',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
          })}
        >
          No existen libros con los criterios indicados. Por favor, prueba con
          otros filtros.
        </li>
      )}
    </ul>
  )
})
