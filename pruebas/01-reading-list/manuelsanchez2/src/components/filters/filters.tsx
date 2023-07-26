import {
  $,
  type QwikChangeEvent,
  type Signal,
  component$,
  useSignal,
} from '@builder.io/qwik'
import { getAllGenres } from '~/functions/functions'
import { css } from '~/styled-system/css'
import { type Book } from '~/types/types'
import {
  filterCloseButtonStyles,
  filterInputStyles,
  filterModalStyles,
  filterOpenButtonStyles,
  overlayStyles,
} from './styles'

const NUMBER_OF_PAGES = [50, 100, 200, 300, 400, 500, 750, 1000]

interface FiltersProps {
  filters: {
    genre: string
    title: string
    numberOfPages: number
  }
  books: Signal<Book[]>
}

export const Filters = component$<FiltersProps>(({ filters, books }) => {
  const showFilters = useSignal(false)
  const genres = getAllGenres(books)

  const changeGenreFilter = $((e: QwikChangeEvent) => {
    const genre = (e.target as HTMLSelectElement).value
    filters.genre = genre
  })

  const changeNumberOfPagesFilter = $((e: QwikChangeEvent) => {
    const numberOfPages = parseInt((e.target as HTMLSelectElement).value)
    filters.numberOfPages = numberOfPages
  })

  // const selectedTitle = useDebounce(filters.title, 3300)

  return (
    <>
      {showFilters.value ? (
        <>
          <div class={overlayStyles}></div>

          <div data-cy="filters" class={filterModalStyles}>
            <button
              data-cy="close-filters-btn"
              class={filterCloseButtonStyles}
              onClick$={() => (showFilters.value = false)}
            >
              x
            </button>

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
                  placeholder="Drácula, The Lord of The Rings..."
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

            <div
              class={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              })}
            >
              <label for="pages">Búsqueda por número de páginas:</label>
              <div
                class={css({
                  position: 'relative',
                })}
              >
                <select
                  onChange$={changeNumberOfPagesFilter}
                  name="pages"
                  id="pages"
                  class={filterInputStyles}
                >
                  <option value="9999">🤓 No importa el número</option>
                  {NUMBER_OF_PAGES.map((pages) => (
                    <option
                      key={pages}
                      selected={filters.numberOfPages === pages}
                      value={pages}
                    >
                      {`Menos de ${pages.toString()} páginas`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      ) : (
        <button
          data-cy="filters"
          onClick$={() => (showFilters.value = true)}
          class={filterOpenButtonStyles}
        >
          <svg
            class="bee bee-icons"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0956 7.49548C12.0641 7.49847 12.0322 7.5 11.9999 7.5L4.02649 7.5C3.4742 7.5 3.02649 7.05229 3.02649 6.5C3.02649 5.94772 3.4742 5.5 4.02649 5.5L11.9999 5.5C12.0322 5.5 12.0641 5.50153 12.0956 5.50452C12.5062 4.33697 13.6186 3.5 14.9265 3.5C16.2416 3.5 17.359 4.34619 17.7641 5.5238C17.8342 5.50822 17.9071 5.5 17.9819 5.5L19.9734 5.5C20.5256 5.5 20.9734 5.94772 20.9734 6.5C20.9734 7.05228 20.5256 7.5 19.9734 7.5L17.9819 7.5C17.9071 7.5 17.8342 7.49178 17.7641 7.4762C17.359 8.65381 16.2416 9.5 14.9265 9.5C13.6186 9.5 12.5062 8.66303 12.0956 7.49548ZM13.9265 6.5C13.9265 5.94772 14.3742 5.5 14.9265 5.5C15.4788 5.5 15.9265 5.94772 15.9265 6.5C15.9265 7.05228 15.4788 7.5 14.9265 7.5C14.3742 7.5 13.9265 7.05228 13.9265 6.5Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.02658 11.4998C3.4743 11.4998 3.02658 11.9475 3.02658 12.4998C3.02658 13.0521 3.4743 13.4998 4.02658 13.4998H6.01803C6.0484 13.4998 6.07847 13.4984 6.10816 13.4958C6.5188 14.6632 7.63114 15.5 8.93894 15.5C10.2545 15.5 11.3724 14.6532 11.777 13.4748C11.8487 13.4912 11.9234 13.4998 12 13.4998H19.9735C20.5257 13.4998 20.9735 13.0521 20.9735 12.4998C20.9735 11.9475 20.5257 11.4998 19.9735 11.4998H12C11.9233 11.4998 11.8486 11.5084 11.7769 11.5248C11.3721 10.3467 10.2544 9.5 8.93894 9.5C7.6313 9.5 6.51906 10.3366 6.1083 11.5038C6.07857 11.5011 6.04845 11.4998 6.01803 11.4998H4.02658ZM7.93894 12.5C7.93894 11.9477 8.38665 11.5 8.93894 11.5C9.49122 11.5 9.93894 11.9477 9.93894 12.5C9.93894 13.0523 9.49122 13.5 8.93894 13.5C8.38665 13.5 7.93894 13.0523 7.93894 12.5Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9999 19.5C12.0322 19.5 12.0641 19.4985 12.0956 19.4955C12.5062 20.663 13.6186 21.5 14.9265 21.5C16.2416 21.5 17.359 20.6538 17.7641 19.4762C17.8342 19.4918 17.9071 19.5 17.9819 19.5H19.9734C20.5256 19.5 20.9734 19.0523 20.9734 18.5C20.9734 17.9477 20.5256 17.5 19.9734 17.5H17.9819C17.9071 17.5 17.8342 17.5082 17.7641 17.5238C17.359 16.3462 16.2416 15.5 14.9265 15.5C13.6186 15.5 12.5062 16.337 12.0956 17.5045C12.0641 17.5015 12.0322 17.5 11.9999 17.5L4.02649 17.5C3.4742 17.5 3.02649 17.9477 3.02649 18.5C3.02649 19.0523 3.4742 19.5 4.02649 19.5L11.9999 19.5ZM14.9265 17.5C14.3742 17.5 13.9265 17.9477 13.9265 18.5C13.9265 19.0523 14.3742 19.5 14.9265 19.5C15.4788 19.5 15.9265 19.0523 15.9265 18.5C15.9265 17.9477 15.4788 17.5 14.9265 17.5Z"
              fill="currentColor"
            />
          </svg>
          <span>Abrir filtros</span>
        </button>
      )}
    </>
  )
})
