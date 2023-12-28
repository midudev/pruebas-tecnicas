import { useDispatch, useSelector } from 'react-redux'
import { SearchIcon } from '.'
import { changeTitleOrAuthor } from '../../../../redux/states/filtersBooks'
import styles from './styles/InputSearch.module.css'
import { type FiltersBooks } from '../../../../models'
import { type AppStore } from '../../../../redux'

export const InputSearch: React.FC = () => {
  const filtersBooks: FiltersBooks = useSelector((state: AppStore) => state.filtersBooks)
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newTitleOrAuthor = event.target.value
    dispatch(changeTitleOrAuthor({ newTitleOrAuthor }))
  }

  return (
    <div className={styles.Filter}>
      <div className={styles.IconContainer}>
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder='Titles, or author'
        onChange={handleChange}
        value={filtersBooks.titleOrAuthor}
        className={styles.InputSearch}
      />
    </div>
  )
}
