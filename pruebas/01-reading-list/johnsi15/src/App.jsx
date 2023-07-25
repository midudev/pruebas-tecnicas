import ListBooks from './components/BookList'
import ReadingList from './components/ReadingList'
import { useBook } from './hooks/useBook'
import styles from './App.module.css'

function App () {
  const { books, readingList, genres, genre, filterByGenre } = useBook()

  const handleFilter = (event) => {
    // console.log('handleFilter -> ' + event.target.value)
    const genre = event.target.value
    filterByGenre(genre)
  }

  return (
    <main className={styles.main}>
      <header className='header'>
        <h1 className={styles.title}>El viaje de tus lecturas</h1>
        <div className={styles.booksCounter}>
          <p>{books.length} Libros disponibles</p>
          <p>{readingList.length} en la lista de lectura</p>
        </div>
      </header>

      <div className={styles.genres}>
        <label htmlFor="genre">Filtrar por género</label>
        <select id='genre' value={genre} onChange={handleFilter}>
          <option value="All">Todas</option>
          {genres.map(genre => (<option key={genre} value={genre}>{genre}</option>))}
        </select>
      </div>

      <ListBooks books={books}/>

      <ReadingList books={readingList} />
    </main>
  )
}

export default App
