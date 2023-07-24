import { RemoveIcon } from '.'
import styles from './styles/BookReading.module.css'

interface Props {
  title: string
  cover: string
  handleRemoveBookToRead: () => void
}

export const BookReading: React.FC<Props> = ({ title, cover, handleRemoveBookToRead }) => {
  return (
    <div className={styles.BookReading}>
      <img
        src={cover}
        alt={title}
        className={styles.BookCover}
      />
      <div className={styles.BookColumn}></div>
      <div className={styles.BorderSheets}>
        <div className={styles.Sheets}></div>
      </div>
      <div className={styles.BookShadow}></div>
      <button
        onClick={handleRemoveBookToRead}
        className={styles.RemoveIconButton}
      >
        <RemoveIcon className={styles.RemoveIcon} />
      </button>
    </div>
  )
}
