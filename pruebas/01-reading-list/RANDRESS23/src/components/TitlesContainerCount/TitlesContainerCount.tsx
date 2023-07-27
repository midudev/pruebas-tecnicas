import { useSelector } from 'react-redux'
import { TitleContent } from '.'
import { BOOKS_GENRE_TYPES, type FiltersBooks, type Library } from '../../models'
import { type AppStore } from '../../redux/store'
import styles from './styles/TitlesContainerCount.module.css'

export const TitlesContainerCount: React.FC = () => {
  const booksAvailable: Library = useSelector((state: AppStore) => state.booksAvailable)
  const filtersBooks: FiltersBooks = useSelector((state: AppStore) => state.filtersBooks)

  const countBooksByGenre = filtersBooks.genre === BOOKS_GENRE_TYPES.ALL
    ? booksAvailable.length
    : booksAvailable.filter((book) => book.genre === filtersBooks.genre).length

  return (
    <article className={styles.TitlesContainerCount}>
      <TitleContent
        title='Books Available'
        count={booksAvailable.length}
        isTitleGenre={false}
      />
      <TitleContent
        title='Genre Books'
        count={countBooksByGenre}
        isTitleGenre={true}
      />
    </article>
  )
}
