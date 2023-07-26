import {
  $,
  type QwikChangeEvent,
  component$,
  useSignal,
} from '@builder.io/qwik'
import { getAllGenres } from '~/functions/functions'
import { css } from '~/styled-system/css'
import {
  filterButtonsStyles,
  filterCloseButtonStyles,
  filterInputStyles,
  filterModalStyles,
  filterOpenButtonStyles,
  formGroupStyles,
  overlayStyles,
} from './styles'
import { IconClose, IconFilter } from '../icons/icons'
import { useGlobalState } from '~/ctx/ctx'

const NUMBER_OF_PAGES = [50, 100, 200, 300, 400, 500, 750, 1000]

export const Filters = component$(() => {
  const { books, filters } = useGlobalState()

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

  const removeFilters = $(() => {
    filters.genre = 'all'
    filters.title = ''
    filters.numberOfPages = 9999
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

            <div class={formGroupStyles}>
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

            <div class={formGroupStyles}>
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

            <div class={formGroupStyles}>
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
        <div class={filterButtonsStyles}>
          {filters.genre !== 'all' && (
            <button
              class={filterOpenButtonStyles}
              data-cy="filters-remove"
              onClick$={removeFilters}
            >
              <IconClose />
              <span>Resetear filtros</span>
            </button>
          )}

          <button
            class={filterOpenButtonStyles}
            data-cy="filters"
            onClick$={() => (showFilters.value = true)}
          >
            <IconFilter />
            <span>Abrir filtros</span>
          </button>
        </div>
      )}
    </>
  )
})
