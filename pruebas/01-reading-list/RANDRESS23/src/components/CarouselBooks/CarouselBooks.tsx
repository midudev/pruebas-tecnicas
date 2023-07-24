import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './styles/CarouselBooks.module.css'
import { BookReading } from './components/BookReading'

export const CarouselBooks: React.FC = () => {
  const boxRef = useRef(null)

  return (
    <div
      className={styles.CarouselBooks}
      ref={boxRef}
    >
      <motion.div
        drag='x'
        dragConstraints={boxRef}
        className={styles.BooksContainer}
      >
        <BookReading />
      </motion.div>
    </div>
  )
}
