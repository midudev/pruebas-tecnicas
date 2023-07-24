import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './styles/CarouselBooks.module.css'
import { BookReading } from './components/BookReading'
import { type Book, type Library } from '../../models'
import { type AppStore } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { removeBookToRead } from '../../redux/states/booksToRead'
import { addBookAvailable } from '../../redux/states/booksAvailable'

export const CarouselBooks: React.FC = () => {
  const booksToRead: Library = useSelector((state: AppStore) => state.booksToRead)
  const boxRef = useRef(null)
  const dispatch = useDispatch()

  const handleRemoveBookToRead = ({ book }: { book: Book }): void => {
    dispatch(removeBookToRead({ bookISBN: book.ISBN }))
    dispatch(addBookAvailable({ newBook: book }))
  }

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
