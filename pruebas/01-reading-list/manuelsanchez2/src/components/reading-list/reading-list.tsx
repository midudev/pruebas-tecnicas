import { component$ } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { css } from '~/styled-system/css'
import { type Book } from '~/types/types'
import { BookSpine } from '../book-spine/book-spine'

export const ReadingList = component$(() => {
  const { readingList } = useGlobalState()

  return (
    <ul
      class={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginInline: 'auto',
        width: '100%',
        lg: {
          alignItems: 'flex-start',
          marginInline: '0',
        },
      })}
    >
      {readingList.value.length > 0 ? (
        readingList.value.map((book: Book) => (
          <li key={book.ISBN}>
            <BookSpine book={book} />
          </li>
        ))
      ) : (
        <p
          class={css({
            width: '100%',
          })}
        >
          No hay libros en tu lista de lectura.
        </p>
      )}
    </ul>
  )
})
