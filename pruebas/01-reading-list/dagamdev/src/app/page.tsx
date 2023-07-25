import styles from './page.module.scss'
import Books from '@/components/book/BooksList'
import Filters from '@/components/filter/Filters'
import BooksProvider from '@/providers/BooksProvider'

export default function Home() {
  return (
    <main className={styles.main}>
      <BooksProvider>
        <Filters />
        <Books />
      </BooksProvider>
    </main>
  )
}
