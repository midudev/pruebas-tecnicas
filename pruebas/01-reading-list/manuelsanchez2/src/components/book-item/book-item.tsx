import { $, component$ } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { css } from '~/styled-system/css'
import { type Book } from '~/types/types'

type BookItemProps = {
  book: Book
  width?: number
  height?: number
}

export const BookItem = component$(
  ({ book, width = 100, height = 150 }: BookItemProps) => {
    const { title, cover } = book
    const { booksWithUserPreferences } = useGlobalState()

    const toggleIsBookSelected = $(() => {
      booksWithUserPreferences.value = booksWithUserPreferences.value.map((b) =>
        b.id !== book.id ? b : { ...b, isInReadingList: !b.isInReadingList }
      )
    })

    const bookStyles = css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1rem',
      aspectRatio: '1/1.5',
      cursor: 'pointer',
    })

    return (
      <button
        title={title}
        onClick$={toggleIsBookSelected}
        class={bookStyles}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          opacity: book.isInReadingList ? 0.2 : 1,
        }}
      >
        <figure>
          <img
            width={width}
            height={height}
            src={cover}
            alt={title}
            style={{
              objectFit: 'cover',
              aspectRatio: '1/1.5',
            }}
          />
        </figure>
      </button>
    )
  }
)
