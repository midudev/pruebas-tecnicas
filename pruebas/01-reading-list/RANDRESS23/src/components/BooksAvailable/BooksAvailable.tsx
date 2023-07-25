import { useEffect } from 'react'
import { BookItem } from '.'
import { useSelector, useDispatch } from 'react-redux'
import { type FiltersBooks, type Book, type Library } from '../../models'
import { type AppStore } from '../../redux'
import { removeBookAvailable } from '../../redux/states/booksAvailable'
import { addBookToRead } from '../../redux/states/booksToRead'
import styles from './styles/BooksAvailable.module.css'
import { removeBookFiltered, sortByGenre } from '../../redux/states/booksFiltered'

export const BooksAvailable: React.FC = () => {
  const booksAvailable: Library = useSelector((state: AppStore) => state.booksAvailable)
  const filtersBooks: FiltersBooks = useSelector((state: AppStore) => state.filtersBooks)
  const booksFiltered: Library = useSelector((state: AppStore) => state.booksFiltered)
  const dispatch = useDispatch()

  const handleAddToRead = ({ book }: { book: Book }): void => {
    dispatch(addBookToRead({ newBook: book }))
    dispatch(removeBookAvailable({ bookISBN: book.ISBN }))
    dispatch(removeBookFiltered({ bookISBN: book.ISBN }))
  }
  console.log({ filtersBooks })

  useEffect(() => {
    dispatch(sortByGenre({ booksAvailable, genre: filtersBooks.genre }))
  }, [filtersBooks])

  return (
    <div className={styles.BooksAvailable}>
      {
        booksFiltered.map((book) => {
          const { title, author, cover, ISBN } = book

          return (
            <BookItem
              key={ISBN}
              title={title}
              author={author.name}
              cover={cover}
              handleAddToRead={() => { handleAddToRead({ book }) }}
            />
          )
        })
      }
    </div>
  )
}
