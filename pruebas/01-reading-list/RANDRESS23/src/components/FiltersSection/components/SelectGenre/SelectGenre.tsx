import { useDispatch, useSelector } from 'react-redux'
import { changeGenre } from '../../../../redux/states/filtersBooks'
import styles from './styles/SelectGenre.module.css'
import { type FiltersBooks } from '../../../../models'
import { type AppStore } from '../../../../redux'
import { GENRE_BOOKS } from '../../../../data/books'

export const SelectGenre: React.FC = () => {
  const filtersBooks: FiltersBooks = useSelector((state: AppStore) => state.filtersBooks)
  const dispatch = useDispatch()

  const handleChangeGenre = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newGenre = event.target.value
    dispatch(changeGenre({ newGenre }))
  }

  return (
    <div className={styles.Filter}>
      <label className={styles.FilterLabel}>Filter by genre</label>
      <div className={styles.FilterSelectContainer}>
        <select
          value={filtersBooks.genre}
          onChange={handleChangeGenre}
          className={styles.FilterSelect}
        >
          <option value="All" className={styles.FilterOption}>All</option>
          {
            GENRE_BOOKS.map(genre => (
              <option
                key={genre}
                value={genre}
                className={styles.FilterOption}
              >
                {genre}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}
