import { motion } from 'framer-motion'
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
      <motion.div
        layout
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0, transition: { duration: 0.5 } }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        className={styles.BookAvailableReading}
      >
        <motion.img
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
      </motion.div>
      <div className={styles.BookAvailableTitlesContainer}>
        <p className={styles.BookAvailableTitle}>{title}</p>
        <p className={styles.BookAvailableAuthor}>{author}</p>
      </div>
    </div>
  )
}
