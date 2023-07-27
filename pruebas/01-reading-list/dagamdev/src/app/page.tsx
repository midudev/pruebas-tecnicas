import styles from './page.module.scss'
import Books from '@/components/book/BooksList'
import Filters from '@/components/filter/Filters'
import BooksProvider from '@/providers/BooksProvider'
import FiltersProvider from '@/providers/FiltersProvider'

export default function Home() {
  return (
    <main className={styles.main}>
      <BooksProvider>
        <FiltersProvider>
          <Filters />
          <Books />
        </FiltersProvider>
      </BooksProvider>
    </main>
  )
}
