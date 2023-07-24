import { Book } from '.'
import styles from './styles/BooksAvailable.module.css'

export const BooksAvailable: React.FC = () => {
  return (
    <div className={styles.BooksAvailable}>
      <Book />
    </div>
  )
}
