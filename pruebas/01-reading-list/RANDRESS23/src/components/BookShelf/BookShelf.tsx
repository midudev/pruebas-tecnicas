import { BooksAvailable } from '../BooksAvailable'
import { FiltersSection } from '../FiltersSection'
import { PendingBooks } from '../PendingBooks'
import { ShelfTable } from '../ShelfTable'
import { TitlesContainerCount } from '../TitlesContainerCount'
import styles from './styles/BookShelf.module.css'

export const BookShelf: React.FC = () => {
  return (
    <section className={styles.BookShelf}>
        <PendingBooks />
        <ShelfTable />
        <section className={styles.ShelfDown}>
          <TitlesContainerCount />
          <FiltersSection />
          <BooksAvailable />
        </section>
    </section>
  )
}
