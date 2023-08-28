import styles from './page.module.scss'
import Books from '@/components/book/BooksList'
import Filters from '@/components/filter/Filters'
import BooksProvider from '@/providers/BooksProvider'
import FiltersProvider from '@/providers/FiltersProvider'
import OrganizeProvider from '@/providers/Organize.provider'

export default function Home() {
  return (
    <main className={styles.main}>
      <FiltersProvider>
        <OrganizeProvider>
          <BooksProvider>
            <Filters />
            <Books />
          </BooksProvider>
        </OrganizeProvider>
      </FiltersProvider>
    </main>
  )
}
