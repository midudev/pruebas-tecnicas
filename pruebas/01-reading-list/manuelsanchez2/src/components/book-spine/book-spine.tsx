import { $, component$ } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { priorityTransformer } from '~/functions/functions'
import { css } from '~/styled-system/css'
import { type Book } from '~/types/types'

type BookSpineProps = {
  book: Book
}

export const BookSpine = component$(({ book }: BookSpineProps) => {
  const { title, isInReadingList } = book
  const { booksWithUserPreferences } = useGlobalState()

  const toggleIsBookSelected = $(() => {
    booksWithUserPreferences.value = booksWithUserPreferences.value.map((b) =>
      b.id !== book.id ? b : { ...b, isInReadingList: !b.isInReadingList }
    )
  })

  const bookSpineStyles = css({
    display: 'flex',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    padding: '0.5rem',
    width: '300px',
    justifyContent: 'center',
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
        <button
          aria-label={
            isInReadingList
              ? 'Sacar libro de la lista de lectura'
              : 'Añadir libro a la lista de lectura'
          }
          onClick$={toggleIsBookSelected}
          class={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            width: '100%',
            color: '#fff',
          })}
        >
          <div>{title}</div>
          <div>x</div>
        </button>
      </div>
      <small>{priorityTransformer(book.priority)}</small>
    </div>
  )
})
