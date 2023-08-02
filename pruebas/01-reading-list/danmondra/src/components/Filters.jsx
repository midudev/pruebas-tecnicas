import { useState } from 'react'
import { useBooks } from '../hooks/useBooks.jsx'
import { useFilters } from '../hooks/useFilters.jsx'
import styles from '../styles/main.module.css'
import { BookIcon, FiltersIcon, SavedBooksIcon } from './Icons.jsx'

export function Filters() {
  const { books, booksInLists } = useBooks()
  const { filters, filteredBooks, setFilters } = useFilters()

  const [allGenres] = useState(() => {
    const allGenres = books.map(({ genre }) => genre)
    const uniqueGenres = new Set([...allGenres])

    return [...uniqueGenres]
  })

  const handleChangeRange = (e) => {
    if (e.target.valueAsNumber < 0) {
      return setFilters(state => ({ ...state, maxPages: 0 }))
    }
    setFilters(state => ({ ...state, maxPages: e.target.valueAsNumber }))
  }

  const handleChangeSelect = (e) => {
    setFilters(state => ({ ...state, genre: e.target.value }))
  }

  const getWidthOfRangeInput = () => {
    const offsetWidth = document.querySelector('.range')?.offsetWidth || 200
    return offsetWidth
  }

  return (
    <div className={styles.filters}>
      <form className={styles.form}>
        <label className={styles.genre}>
          <select
            name='genre'
            className={styles.select}
            onChange={handleChangeSelect}
          >
            <option value=''>Todos los géneros</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </label>
        <label className={`${styles.range} range`}>
          <span
            className={styles.rangeRepresentation}
            style={{
              width: `${((getWidthOfRangeInput() / (filters.bookWithMorePages + 90)) * filters.maxPages) + 10}px`
            }}
          />
          <span>Páginas máx.</span>
          <span className={styles.rangeValue}>{filters.maxPages}</span>
          <input
            type='range'
            min='-50'
            max={filters.bookWithMorePages}
            step='10'
            value={filters.maxPages}
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
