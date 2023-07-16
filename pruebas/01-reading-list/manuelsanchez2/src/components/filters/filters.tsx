import {
  $,
  type QwikChangeEvent,
  type Signal,
  component$,
} from '@builder.io/qwik'
import { getAllGenres } from '~/functions/functions'
// import { useDebounce } from '~/hooks/useDebounce'
import { css } from '~/styled-system/css'
import { type Book } from '~/types/types'

interface FiltersProps {
  filters: {
    genre: string
    title: string
  }
  books: Signal<Book[]>
  showFilterByName?: boolean
  showFilterByGenre?: boolean
}

const filterWrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  my: '2rem',
})

const filterInputStyles = css({
  width: '300px',
  height: '2.5rem',
  color: 'black',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  border: 'none',
  borderBottom: '1px solid black',
  backgroundColor: 'transparent',
  outline: 'none',
  padding: '0.5rem',
  '&:focus': {
    borderBottom: '1px solid blue',
  },
  '&::placeholder': {
    color: 'gray',
    fontSize: '0.75rem',
    opacity: 0.5,
  },
})

export const Filters = component$<FiltersProps>(
  ({ filters, books, showFilterByName = true, showFilterByGenre = true }) => {
    const genres = getAllGenres(books)

    const changeGenreFilter = $((e: QwikChangeEvent) => {
      const genre = (e.target as HTMLSelectElement).value
      filters.genre = genre
    })

    // const selectedTitle = useDebounce(filters.title, 3300)

    return (
      <div class={filterWrapperStyles}>
        {showFilterByName && (
          <div
            class={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            })}
          >
            <label for="title">Búsqueda por título:</label>
            <div
              class={css({
                position: 'relative',
              })}
            >
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Dracula, The Lord of The Rings..."
                class={filterInputStyles}
                value={filters.title}
                onInput$={(e: Event) => {
                  const title = (e.target as HTMLInputElement).value
                  filters.title = title
                }}
              />
              {filters.title.length > 0 && (
                <button
                  class={css({
                    position: 'absolute',
                    right: '0.5rem',
                    top: '50%',
                    cursor: 'pointer',
                    transform: 'translateY(-50%)',
                  })}
                  onClick$={() => (filters.title = '')}
                >
                  x
                </button>
              )}
            </div>
          </div>
        )}
        {showFilterByGenre && (
          <div
            class={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            })}
          >
            <label for="genre">Búsqueda por género:</label>
            <select
              onChange$={changeGenreFilter}
              id="genre"
              name="genre"
              class={filterInputStyles}
            >
              <option value="all">Todos los géneros</option>
              {genres.map((genre) => (
                <option
                  key={genre}
                  selected={filters.genre === genre}
                  value={genre}
                >
                  {genre}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    )
  }
)
