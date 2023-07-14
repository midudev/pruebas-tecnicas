import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { BookItem } from '~/components/book-item/book-item'
import { Filters } from '~/components/filters/filters'
import { Logo } from '~/components/logo/logo'
import { ReadingList } from '~/components/reading-list/reading-list'
import { useGlobalState } from '~/ctx/ctx'
import { css } from '~/styled-system/css'

const NUMBER_OF_BOOKS_PER_PAGE = 8

const wrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minH: '75vh',
  px: '20px',
})

export default component$(() => {
  const { books, booksWithUserPreferences, readingList } = useGlobalState()

  return (
    <>
      <Logo />

      <p
        class={css({
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
        })}
      >
        Número total de libros: {books.value.length}
      </p>
      <p
        class={css({
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
        })}
      >
        Libros en la lista de lectura: {readingList.value.length}
      </p>

      <Filters />

      <div class={wrapperStyles}>
        <div
          class={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',
            width: '100%',
          })}
        >
          <ul
            class={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              width: '50%',
            })}
          >
            {booksWithUserPreferences.value
              .slice(0, NUMBER_OF_BOOKS_PER_PAGE)
              .map((book) => (
                <li key={book.ISBN}>
                  <BookItem book={book} />
                </li>
              ))}
          </ul>
          <ReadingList />
        </div>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Lista de lectura',
  meta: [
    {
      name: 'description',
      content:
        'Gestiona tu lista de lectura con Qwik. Añade filtros, ordena y busca.',
    },
  ],
}
