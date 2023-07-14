import { component$ } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { css } from '~/styled-system/css'
import { type Book } from '~/types/types'
import { BookItem } from '../book-item/book-item'

export const ReadingList = component$(() => {
  const { readingList } = useGlobalState()

  return (
    <ul
      class={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '2rem',
        width: '30%',
      })}
    >
      {readingList.value.length > 0 ? (
        readingList.value.map((book: Book) => (
          <li key={book.ISBN}>
            <BookItem book={book} width={50} height={100} />
          </li>
        ))
      ) : (
        <p>No hay libros en tu lista de lectura.</p>
      )}
    </ul>
  )
})
