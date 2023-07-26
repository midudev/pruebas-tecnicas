import { useSelector, useDispatch } from 'react-redux'
import { type FiltersBooks } from '../../../../models'
import { type AppStore } from '../../../../redux'
import { changePages } from '../../../../redux/states/filtersBooks'
import styles from './styles/InputRange.module.css'

export const InputRange: React.FC = () => {
  const filtersBooks: FiltersBooks = useSelector((state: AppStore) => state.filtersBooks)
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newPages = event.target.value
    dispatch(changePages({ newPages }))
  }

  return (
    <div className={styles.Filter}>
      <label className={styles.FilterLabel}>Filter by pages</label>
      <input
        type="range"
        value={filtersBooks.pages}
        min={0}
        max={1200}
        onChange={handleChange}
        className={styles.InputRange}
      />
      <p className={styles.RangeLabelValue}>From {filtersBooks.pages} pages</p>
    </div>
  )
}
