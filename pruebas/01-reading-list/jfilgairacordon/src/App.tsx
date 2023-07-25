import { useEffect } from 'react'
import './App.css'
import { BooksGrid } from './components/BooksGrid'
import { Filters } from './components/Filters'
import { UserReadList } from './components/UserReadList'
import { useBooks } from './hooks/useBooks'
import { getBooks } from './services/books-service'
import { useLocalStorageSync } from './hooks/useLocalStorageSync'

function App () {
  const {
    books,
    readList,
    loading,
    setBooks,
    filterBooks
  } = useBooks()

  /**
   * Esto activa la sincronización con localStorage.
   * No sé si es buena práctica hacer una llamada a un hook que no devuelve nada.
   * Pero no me parecía buena idea mezclar la lógica de la sincro con el uso
   * del useBooks para pillar el estado. Igual se podría usar un hook rollo
   * useApp o algo así que hiciera todo.
   */
  useLocalStorageSync()

  useEffect(() => {
    /** Simula una request para recuperar los books */
    getBooks()
      .then(books => {
        setBooks(books)
      })
      .catch(error => {
        console.error(error)
        setBooks([])
      })
  }, [])

  const hasToShowReadList = readList.length > 0

  const filteredBooks = filterBooks(books)

  return (
    <div className='app'>
      <div className="main-content">
        <header>
          <h1>LibrosApp</h1>
          <div className="vertical-separator"></div>
          <span className='filter-total'>
            {
              loading
                ? 'Cargando...'
                : `${filteredBooks.length} Libros disponibles`
            }
          </span>
        </header>

        <Filters />

        <BooksGrid />

        {/* Lista de lectura */}
        {
          hasToShowReadList && <UserReadList />
        }
      </div>
      <footer className="footer">
        <a href="https://twitter.es/jfilgairacordon">@jfilgairacordon</a>
      </footer>
    </div>
  )
}

export default App
