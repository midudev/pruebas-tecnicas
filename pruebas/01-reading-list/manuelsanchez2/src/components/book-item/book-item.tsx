import { $, component$ } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'
import { css } from '~/styled-system/css'
import { type Book } from '~/types/types'

type BookItemProps = {
  book: Book
}

export const BookItem = component$(({ book }: BookItemProps) => {
  const { title, cover, isInReadingList } = book
  const { booksWithUserPreferences } = useGlobalState()

  const toggleIsBookSelected = $(() => {
    booksWithUserPreferences.value = booksWithUserPreferences.value.map((b) =>
      b.id !== book.id ? b : { ...b, isInReadingList: !b.isInReadingList }
    )
  })

  const bookWrapperStyles = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1rem',
    aspectRatio: '1/1.5',
    perspective: '200px',
    width: '165px',
    height: '225px',
  })

  const bookStyles = css({
    display: 'flex',
    cursor: 'pointer',
    width: '165px',
    height: '225px',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s ease-in-out',
    _hover: {
      transform: 'rotateY(-10deg)',
    },
    _focus: {
      transform: 'rotateY(-10deg)',
    },
    _before: {
      content: '',
      background: '#fff',
      height: 'calc(165px - 2 * 3px)',
      width: '50px',
      top: '3px',
      position: 'absolute',
      transform:
        'translateX(calc(165px - 50px / 2 - 3px)) rotateY(90deg) translateX(calc(50px / 2))',
    },
    _after: {
      content: '',
      position: 'absolute',
      width: '165px',
      height: '225px',
      background: '#000',
      transform: 'translateZ(-50px)',
      boxShadow: '-10px 0 50px 10px #666',
    },
  })

  const bookImageStyles = css({
    width: '165px',
    height: '225px',
    position: 'absolute',
    boxShadow: '5px 5px 20px #666',
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
          // transform: isInReadingList ? 'rotateY(-10deg)' : 'rotateY(0deg)',
        }}
      >
        <img width={165} height={225} class={bookImageStyles} src={cover} />
      </button>
    </div>
  )
})
