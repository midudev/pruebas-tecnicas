import { $, component$ } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { priorityTransformer } from '~/functions/functions'
import { css } from '~/styled-system/css'
import { StoredBook, type Book } from '~/types/types'
import {
  bookSpineInnerStyles,
  bookSpineStyles,
  bookSpineTitleStyles,
  buttonCloseSpineStyles,
} from './styles'

export const BookSpine = component$(({ book }: { book: StoredBook }) => {
  const { title } = book
  const { booksWithUserPreferences } = useGlobalState()

  const removeBookFromReadingList = $(() => {
    booksWithUserPreferences.value = booksWithUserPreferences.value.map((b) => {
      if (b.id === book.id) {
        return { ...b, isInReadingList: false }
      }
      return b
    })
  })

  const toggleBookPriority = $(() => {
    booksWithUserPreferences.value = booksWithUserPreferences.value.map((b) => {
      if (b.id === book.id) {
        let newPriority
        switch (b.priority) {
          case 0:
            newPriority = 1
            break
          case 1:
            newPriority = 2
            break
          case 2:
            newPriority = 0
            break
          default:
            newPriority = b.priority // keep the priority unchanged if it's an unexpected value
        }
        return { ...b, priority: newPriority }
      }
      return b
    })
  })

  return (
    <div
      class={css({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      })}
    >
      <div
        class={bookSpineStyles}
        style={{
          background: `linear-gradient(rgba(151, 101, 64, 0.7), rgba(134, 137, 117, 0.7)), url(${book.cover})`,
        }}
      >
        <div class={bookSpineInnerStyles}>
          <div class={bookSpineTitleStyles}>{title}</div>
          <button
            class={buttonCloseSpineStyles}
            aria-label="Sacar libro de la lista de lectura"
            onClick$={removeBookFromReadingList}
          >
            x
          </button>
          <button
            onClick$={toggleBookPriority}
            class={css({
              cursor: 'pointer',
              position: 'absolute',
              top: '0',
            })}
          >
            {priorityTransformer(book.priority)}
          </button>
        </div>
      </div>
    </div>
  )
})
