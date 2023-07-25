import { useDispatch, useSelector } from 'react-redux'
import { changeGenre } from '../../../../redux/states/filtersBooks'
import styles from './styles/SelectGenre.module.css'
import { type FiltersBooks } from '../../../../models'
import { type AppStore } from '../../../../redux'

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
          defaultValue={filtersBooks.genre}
          onChange={handleChangeGenre}
          className={styles.FilterSelect}
        >
          <option value="All" className={styles.FilterOption}>All</option>
          <option value="Fantasía" className={styles.FilterOption}>Fantasy</option>
          <option value="Ciencia ficción" className={styles.FilterOption}>Science fiction</option>
          <option value="Zombies" className={styles.FilterOption}>Zombies</option>
          <option value="Terror" className={styles.FilterOption}>Horror</option>
        </select>
      </div>
    </div>
  )
}
