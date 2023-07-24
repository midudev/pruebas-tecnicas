import styles from './styles/BookReading.module.css'

export const BookReading: React.FC = () => {
  return (
    <div className={styles.BookReading}>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
      <div className={styles.BookColumn}></div>
      <div className={styles.BorderSheets}>
        <div className={styles.Sheets}></div>
      </div>
      <div className={styles.BookShadow}></div>
    </div>
  )
}
