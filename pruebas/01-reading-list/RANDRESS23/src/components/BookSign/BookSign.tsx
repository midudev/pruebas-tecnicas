import { useSelector } from 'react-redux'
import { type Library } from '../../models'
import { type AppStore } from '../../redux/store'
import styles from './styles/BookSign.module.css'

export const BookSign: React.FC = () => {
  const booksToRead: Library = useSelector((state: AppStore) => state.booksToRead)

  return (
    <div className={styles.BookSign}>
      <div className={styles.Sign}>{booksToRead.length}</div>
    </div>
  )
}
