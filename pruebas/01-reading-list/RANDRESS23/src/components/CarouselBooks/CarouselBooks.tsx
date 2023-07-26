import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './styles/CarouselBooks.module.css'
import { BookReading } from './components/BookReading'
import { useDebounceFilters } from '../../hooks/useDebounceFilters'

export const CarouselBooks: React.FC = () => {
  const boxRef = useRef(null)
  const { booksToRead, handleRemoveBookToRead } = useDebounceFilters()

  return (
    <div
      ref={boxRef}
      className={styles.CarouselBooks}
      style={booksToRead.length > 0 ? { cursor: 'grab' } : { cursor: 'default' }}
    >
      <motion.div
        drag='x'
        dragConstraints={boxRef}
        className={styles.BooksContainer}
      >
        {
          booksToRead.map((book) => {
            const { title, cover, ISBN } = book

            return (
              <BookReading
                key={ISBN}
                title={title}
                cover={cover}
                handleRemoveBookToRead={() => { handleRemoveBookToRead({ book }) }}
              />
            )
          })
        }
      </motion.div>
    </div>
  )
}
