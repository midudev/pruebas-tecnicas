import { useRef, useState } from 'react'
import ListBooks from './components/BookList'
import ReadingList from './components/ReadingList'
import Footer from './components/Footer'
import { useBook } from './hooks/useBook'
import styles from './App.module.css'

function App () {
  const { books, readingList, genres, genre, pages, filterByGenre, filterByPages } = useBook()
  const [activeMenu, setActiveMenu] = useState(false)
  const minPages = useRef(Math.min(...books.map(b => b.pages))) // use ref to avoid rerender and keep the initial value
  const maxPages = useRef(Math.max(...books.map(b => b.pages)))

  const handleFilterGenre = (event) => {
    // console.log('handleFilterGenre -> ' + event.target.value)
    const genre = event.target.value
    filterByGenre(genre)
  }

  const handleFilterPages = (event) => {
    const pages = Number(event.target.value)
    filterByPages(pages)
  }

  return (
   <>
    <main className={styles.main}>
      {readingList.length > 0 && (
        <button className={styles.seeList} onClick={() => setActiveMenu(!activeMenu)}>
          {!activeMenu ? 'Ver lista de lectura' : 'Ocultar lista de lectura'}
        </button>
      )}

      <section className={styles.listBooks}>
        <header className='header'>
          <h1 className={styles.title}>El viaje de tus lecturas</h1>
          <div className={styles.booksCounter}>
            <p><strong>{books.length}</strong> Libros disponibles</p>
            {readingList.length > 0 && (<p>
              <strong>{readingList.length}</strong> en la lista de lectura</p>
            )}
          </div>
        </header>

        <div className={styles.filters}>
          <div className={styles.genres}>
            <label htmlFor="genre">Filtrar por género</label>
            <select id='genre' value={genre} onChange={handleFilterGenre}>
              <option value="All">Todas</option>
              {genres.map(genre => (<option key={genre} value={genre}>{genre}</option>))}
            </select>
          </div>
          <div className={styles.pages}>
            <label htmlFor="pages">Filtrar por número de páginas</label>
            <input type="range" id="pages" value={pages} min={minPages.current} max={maxPages.current} onChange={handleFilterPages} step='1' />
          </div>
        </div>
        <ListBooks books={books}/>

      </section>
      <ReadingList books={readingList} activeMenu={activeMenu} />

    </main>
    <Footer />
   </>
  )
}

export default App
