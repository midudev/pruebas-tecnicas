import styles from './styles/BookItem.module.css'

interface Props {
  title: string
  cover: string
  handleAddToRead: () => void
}

export const BookItem: React.FC<Props> = ({ title, cover, handleAddToRead }) => {
  return (
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
  )
}
