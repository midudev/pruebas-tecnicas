import { Home } from './pages/Home'
import { BookShelf } from './components/BookShelf'
import styles from './App.module.css'

export default function App (): JSX.Element {
  return (
    <div className={styles.Library}>
      {/* <Home /> */}
      <BookShelf />
    </div>
  )
}
