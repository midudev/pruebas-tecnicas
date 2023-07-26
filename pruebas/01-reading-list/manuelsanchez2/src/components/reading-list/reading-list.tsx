import { component$, useComputed$, useSignal } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { type StoredBook } from '~/types/types'
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

export const ReadingList = component$(() => {
  const { readingList } = useGlobalState()

  const isSorted = useSignal(false)

  const booksSorted = useComputed$(() => {
    const copyOfReadingList = [...readingList.value]
    const booksSorted = copyOfReadingList.sort((a, b) => {
      return b.priority - a.priority
    })

    return isSorted.value === true ? booksSorted : readingList.value
  })

  return (
    <div class={readingListWrapperStyles}>
      {readingList.value.length > 0 && (
        <header class={readingListHeaderStyles}>
          <button
            class={sortButtonStyles}
            onClick$={() => (isSorted.value = !isSorted.value)}
          >
            <IconPrioritySort />
            <span>
              {isSorted.value === false
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
      <div>
        {booksSorted.value.length > 0 ? (
          <ul class={readingListULStyles}>
            {booksSorted.value.map((book: StoredBook) => (
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
