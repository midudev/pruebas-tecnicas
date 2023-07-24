import { BookItem } from '.'
import { useSelector, useDispatch } from 'react-redux'
import { type Book, type Library } from '../../models'
import { type AppStore } from '../../redux/store'
import { addBookToRead } from '../../redux/states/booksToRead'
import { removeBookAvailable } from '../../redux/states/booksAvailable'
import styles from './styles/BooksAvailable.module.css'

export const BooksAvailable: React.FC = () => {
  const booksAvailable: Library = useSelector((state: AppStore) => state.booksAvailable)
  const dispatch = useDispatch()

  const handleAddToRead = ({ book }: { book: Book }): void => {
    dispatch(addBookToRead({ newBook: book }))
    dispatch(removeBookAvailable({ bookISBN: book.ISBN }))
  }

  return (
    <div className={styles.BooksAvailable}>
      {
        booksAvailable.map((book) => {
          const { title, cover, ISBN } = book

          return (
            <BookItem
              key={ISBN}
              title={title}
              cover={cover}
              handleAddToRead={() => { handleAddToRead({ book }) }}
            />
          )
        })
      }
    </div>
  )
}
