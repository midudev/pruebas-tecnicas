import { useBooks } from '../hooks/useBooks.jsx'
import { useFilters } from '../hooks/useFilters.jsx'
import styles from '../styles/main.module.css'
import { BookIcon, FiltersIcon, SavedBooksIcon } from './Icons.jsx'

export function Filters() {
  const { books, booksInLists } = useBooks()
  const { filters, filteredBooks, setFilters } = useFilters()
  const { genre, maxPages, defaultFilters } = filters
  const { allGenres, bookWithMorePages } = defaultFilters

  const handleChangeRange = (e) => {
    if (e.target.valueAsNumber < 0) {
      return setFilters(state => ({ ...state, maxPages: 0 }))
    }
    setFilters(state => ({ ...state, maxPages: e.target.valueAsNumber }))
  }

  const handleChangeSelect = (e) => {
    setFilters(state => ({ ...state, genre: e.target.value }))
  }

  const getWidthOfTheRangeValue = () => {
    // TODO --- Refactor this
    const offsetWidth = document.querySelector('.range')?.offsetWidth || 200
    return (offsetWidth / (bookWithMorePages + 90)) * filters.maxPages + 10
  }

  return (
    <div className={styles.filters}>
      <form className={styles.form}>
        <label className={styles.genre}>
          <select
            name='genre'
            className={styles.select}
            value={genre}
            onChange={handleChangeSelect}
          >
            <option value=''>Todos los géneros</option>
            {allGenres?.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </label>
        <label className={`${styles.range} range`}>
          <span
            className={styles.rangeRepresentation}
            style={{
              width: `${getWidthOfTheRangeValue()}px`
            }}
          />
          <span>Páginas máx.</span>
          <span className={styles.rangeValue}>{maxPages}</span>
          <input
            type='range'
            min='-50'
            max={bookWithMorePages}
            step='10'
            value={maxPages}
            onChange={handleChangeRange}
          />
        </label>
      </form>

      <div className={styles.booksInfoQuantities}>
        <p title='Libros filtrados'>
          <span>{filteredBooks.length}</span>
          <FiltersIcon />
        </p>
        <p title='Todos los libros'>
          <span>{books.length}</span>
          <BookIcon />
        </p>
        <p title='Libros en las listas'>
          <span>{booksInLists.length}</span>
          <SavedBooksIcon />
        </p>
      </div>
    </div>
  )
}
