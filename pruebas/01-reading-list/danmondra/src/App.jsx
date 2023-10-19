import { RouterScrollProvider } from './context/routerScroll.jsx'
import { BooksProvider } from './context/books.jsx'
import { FiltersProvider } from './context/filters.jsx'
import { Header } from './components/Header.jsx'
import { Explore } from './components/Explore.jsx'
import { UserLists } from './components/UserLists.jsx'
import { Toaster } from 'sonner'
import styles from './styles/main.module.css'

function App() {
  return (
    <RouterScrollProvider>
      <BooksProvider>
        <div className={styles.editorialBg} />
        <Header />
        <main
          className={styles.main}
          id='elementToScroll'
        >
          <FiltersProvider>
            <Explore />
          </FiltersProvider>
          <UserLists />
        </main>
        <Toaster
          position='top-center'
          expand={false}
          toastOptions={{
            style: {
              background: 'rgb(255 255 255 / .9)',
              borderRadius: '5px',
              backdropFilter: 'blur(3px)'
            }
          }}
        />
      </BooksProvider>
    </RouterScrollProvider>
  )
}

export default App
