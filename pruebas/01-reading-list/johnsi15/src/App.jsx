import ListBooks from './components/BookList'
import ReadingList from './components/ReadingList'
import { useBook } from './hooks/useBook'
import './App.css'

function App () {
  const { books, readingList, genres, genre, filterByGenre } = useBook()

  const handleFilter = (event) => {
    // console.log('handleFilter -> ' + event.target.value)
    const genre = event.target.value
    filterByGenre(genre)
  }

  return (
    <>
      <h1>Lista de libros</h1>

      <h2>{books.length} Libros disponibles</h2>
      <h3>{readingList.length} en la lista de lectura</h3>

      <div className="genres">
        <label htmlFor="genre">Filtrar por género</label>
        <select id='genre' value={genre} onChange={handleFilter}>
          <option value="All">Todas</option>
          {genres.map(genre => (<option key={genre} value={genre}>{genre}</option>))}
        </select>
      </div>

      <ListBooks books={books}/>

      <ReadingList books={readingList} />
    </>
  )
}

export default App
