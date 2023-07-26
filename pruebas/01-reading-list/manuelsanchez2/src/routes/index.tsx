import {
  component$,
  useComputed$,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { BooksList } from '~/components/books-list/books-list'
import { Filters } from '~/components/filters/filters'
import { Logo } from '~/components/logo/logo'
import { ReadingList } from '~/components/reading-list/reading-list'
import { useGlobalState } from '~/ctx/ctx'
import { InnerWrapperStyles, OuterWrapperStyles } from './styles'
import { filterBooksByGenre, filterBooksByTitle } from '~/functions/functions'
import { DEFAULT_GENRE } from '~/constants/constants'
import { css } from '~/styled-system/css'
import { timeline, stagger, type TimelineDefinition } from 'motion'

export default component$(() => {
  const { books, booksWithUserPreferences } = useGlobalState()

  const readingList = useComputed$(() =>
    booksWithUserPreferences.value.filter((book) => book.isInReadingList)
  )

  const filters = useStore({
    genre: DEFAULT_GENRE,
    title: '',
    numberOfPages: 750,
  })

  // Here we could filter the books by other settings like genre, number of pages
  const booksFiltered = useComputed$(() => {
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

  useVisibleTask$(() => {
    const sectionBooks = document.querySelector(
      '[data-section="books"]'
    ) as HTMLElement
    const sectionReading = document.querySelector(
      '[data-section="reading"]'
    ) as HTMLElement

    if (!sectionBooks || !sectionReading) return

    setTimeout(() => {
      const books = sectionBooks.querySelectorAll('li')
      const spines = sectionReading.querySelectorAll('li')

      const sequence: TimelineDefinition = [
        [sectionBooks, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [sectionReading, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          books,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.1) },
        ],
        [
          spines,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
      ]

      timeline(sequence, {})
    }, 200)
  })

  return (
    <>
      <div class={OuterWrapperStyles}>
        <section
          data-section="reading"
          aria-label="Libros en la lista de lectura"
          class={css({
            maxWidth: 'var(--max-width-outer)',
            minWidth: '100%',
          })}
          style={{
            opacity: 0,
          }}
        >
          <div class={InnerWrapperStyles}>
            <Logo />
            <div
              class={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                textAlign: 'right',
              })}
            >
              <span>
                <strong>Libros en la lista de lectura:</strong>{' '}
                {readingList.value.length}
              </span>
              <span>
                <strong>Número total de libros:</strong> {books.value.length}
              </span>
            </div>
          </div>

          <ReadingList />
        </section>

        <section
          data-section="books"
          aria-label="Todos los libros disponibles"
          class={css({
            maxWidth: 'var(--max-width-outer)',
            minWidth: '100%',
          })}
          style={{
            opacity: 0,
          }}
        >
          <BooksList booksFiltered={booksFiltered} />
        </section>
      </div>

      <Filters filters={filters} books={books} />
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
