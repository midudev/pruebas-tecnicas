import { useState } from 'react'
import './App.css'
import ListBooks from './components/BookList'
import ReadingList from './components/ReadingList'
import { useBookStore } from './store/bookStore'

function App () {
  // const [books, setBooks] = useState([])
  const booksStore = useBookStore(state => state.books)
  const readingList = useBookStore(state => state.readingList)
  const genres = useBookStore(state => state.genres)

  const [genre, setGenres] = useState('all')
  const [books, setBooks] = useState(booksStore)

  const handleFilter = (event) => {
    // console.log('handleFilter -> ' + event.target.value)
    const genre = event.target.value

    if (genre !== 'all') {
      const filteredBooks = booksStore.filter(book => book.genre === genre)
      setBooks(filteredBooks)
    } else {
      setBooks(booksStore)
    }

    setGenres(genre)
  }

  return (
    <>
      <h3>Lista de libros</h3>

      <div className="genres">
        <select value={genre} onChange={handleFilter}>
          <option value="all">Todas</option>
          {genres.map(genre => (<option key={genre} value={genre}>{genre}</option>))}
        </select>
      </div>

      {<ListBooks books={books}/>}

      <ReadingList books={readingList} />
    </>
  )
}

export default App
