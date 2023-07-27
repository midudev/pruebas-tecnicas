import { BookShelf } from './components/BookShelf'
import styles from './App.module.css'
import { Footer } from './components/Footer'

export default function App (): JSX.Element {
  return (
    <main className={styles.Library}>
      <BookShelf />
      <Footer />
    </main>
  )
}
