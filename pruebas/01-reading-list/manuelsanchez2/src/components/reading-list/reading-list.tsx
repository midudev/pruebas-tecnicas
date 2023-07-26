import { component$, useComputed$ } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { type Book } from '~/types/types'
import { BookSpine } from '../book-spine/book-spine'
import { downloadFromLocalStorage } from '~/functions/utils'
import { STORE_ID } from '~/constants/constants'
import {
  downloadButtonStyles,
  noBookTextStyles,
  readingListHeaderStyles,
  readingListULStyles,
  readingListWrapperStyles,
  shelfStyles,
  sortButtonStyles,
} from './styles'
import { IconDownload, IconPrioritySort } from '../icons/icons'
import { css } from '~/styled-system/css'

export const ReadingList = component$(() => {
  const { filters, booksWithUserPreferences } = useGlobalState()

  const readingList = useComputed$(() => {
    let readingList: Book[]
    if (booksWithUserPreferences.value.length > 0) {
      readingList = booksWithUserPreferences.value.filter(
        (book) => book.isInReadingList === true
      )
    } else {
      readingList = []
    }

    return readingList
  })

  const booksSorted = useComputed$(() => {
    const copyOfReadingList = [...readingList.value]
    const booksSorted = copyOfReadingList.sort((a, b) => {
      return b.priority - a.priority
    })

    return filters.isReadingListSorted === true
      ? booksSorted
      : readingList.value
  })

  return (
    <div data-cy="reading-list" class={readingListWrapperStyles}>
      {readingList.value.length > 0 && (
        <header class={readingListHeaderStyles}>
          <button
            class={sortButtonStyles}
            onClick$={() =>
              (filters.isReadingListSorted = !filters.isReadingListSorted)
            }
            style={{
              backgroundColor:
                filters.isReadingListSorted === false ? 'white' : '#d1d1d1',
            }}
          >
            <IconPrioritySort />
            <span>
              {filters.isReadingListSorted === false
                ? 'Ordenar por prioridad'
                : 'Quitar filtro de prioridad'}
            </span>
          </button>
          <button
            class={downloadButtonStyles}
            onClick$={() => downloadFromLocalStorage(STORE_ID, 'json')}
          >
            <IconDownload />
            <span> Descargar lista</span>
          </button>
        </header>
      )}
      <div class={css({ width: '100%' })}>
        {booksSorted.value.length > 0 ? (
          <ul class={readingListULStyles}>
            {booksSorted.value.map((book: Book) => (
              <li key={book.id}>
                <BookSpine book={book} />
              </li>
            ))}
          </ul>
        ) : (
          <p class={noBookTextStyles}>No hay libros en tu lista de lectura.</p>
        )}
        <div class={shelfStyles}></div>
      </div>
    </div>
  )
})
