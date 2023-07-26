import { $, component$ } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { type Book } from '~/types/types'
import { bookImageStyles, bookStyles, bookWrapperStyles } from './styles'

export const BookItem = component$(({ book }: { book: Book }) => {
  const { title, cover, isInReadingList } = book
  const { booksWithUserPreferences } = useGlobalState()

  const toggleIsBookSelected = $(() => {
    booksWithUserPreferences.value = booksWithUserPreferences.value.map((b) =>
      b.id !== book.id ? b : { ...b, isInReadingList: !b.isInReadingList }
    )
  })

  return (
    <div title={title} class={bookWrapperStyles}>
      <button
        aria-label={
          isInReadingList
            ? 'Sacar libro de la lista de lectura'
            : 'Añadir libro a la lista de lectura'
        }
        onClick$={toggleIsBookSelected}
        class={bookStyles}
        style={{
          opacity: isInReadingList ? 0.2 : 1,
        }}
      >
        <img width={165} height={225} class={bookImageStyles} src={cover} />
      </button>
    </div>
  )
})
