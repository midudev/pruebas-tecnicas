import { SearchIcon } from '.'
import styles from './styles/InputSearch.module.css'

export const InputSearch: React.FC = () => {
  return (
    <div className={styles.Filter}>
      <div className={styles.IconContainer}>
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder='Titles, or author'
        className={styles.InputSearch}
      />
    </div>
  )
}
