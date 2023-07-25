import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './styles/CarouselBooks.module.css'
import { BookReading } from './components/BookReading'
import { type Book, type Library } from '../../models'
import { type AppStore } from '../../redux'
import { useSelector, useDispatch } from 'react-redux'
import { removeBookToRead } from '../../redux/states/booksToRead'
import { addBookAvailable } from '../../redux/states/booksAvailable'
import { addBookFiltered } from '../../redux/states/booksFiltered'

export const CarouselBooks: React.FC = () => {
  const booksToRead: Library = useSelector((state: AppStore) => state.booksToRead)
  const boxRef = useRef(null)
  const dispatch = useDispatch()

  const handleRemoveBookToRead = ({ book }: { book: Book }): void => {
    dispatch(removeBookToRead({ bookISBN: book.ISBN }))
    dispatch(addBookAvailable({ newBook: book }))
    dispatch(addBookFiltered({ newBook: book }))
  }

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
