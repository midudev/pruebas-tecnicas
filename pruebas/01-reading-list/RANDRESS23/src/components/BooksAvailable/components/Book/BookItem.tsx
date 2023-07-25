import styles from './styles/BookItem.module.css'

interface Props {
  title: string
  author: string
  cover: string
  handleAddToRead: () => void
}

export const BookItem: React.FC<Props> = ({ title, author, cover, handleAddToRead }) => {
  return (
    <div className={styles.BookAvailableInfo}>
      <div className={styles.BookAvailableReading}>
        <img
          src={cover}
          alt={title}
          className={styles.BookAvailableCover}
          onClick={handleAddToRead}
        />
        <div className={styles.BookColumn}></div>
        <div className={styles.BorderSheets}>
          <div className={styles.Sheets}></div>
        </div>
        <div className={styles.BookAvailableShadow}></div>
      </div>
      <div className={styles.BookAvailableTitlesContainer}>
        <p className={styles.BookAvailableTitle}>{title}</p>
        <p className={styles.BookAvailableAuthor}>{author}</p>
      </div>
    </div>
  )
}
