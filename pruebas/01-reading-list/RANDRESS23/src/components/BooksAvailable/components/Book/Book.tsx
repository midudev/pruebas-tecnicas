import styles from './styles/Book.module.css'

export const Book: React.FC = () => {
  return (
    <div className={styles.BookAvailableReading}>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookAvailableCover} />
      <div className={styles.BookColumn}></div>
      <div className={styles.BorderSheets}>
        <div className={styles.Sheets}></div>
      </div>
      <div className={styles.BookAvailableShadow}></div>
    </div>
  )
}
