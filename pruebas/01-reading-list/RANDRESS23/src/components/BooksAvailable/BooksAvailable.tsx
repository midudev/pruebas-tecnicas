import { BookItem } from '.'
import styles from './styles/BooksAvailable.module.css'
import { useDebounceFilters } from '../../hooks/useDebounceFilters'

export const BooksAvailable: React.FC = () => {
  const { booksFiltered, handleAddToRead } = useDebounceFilters()

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
