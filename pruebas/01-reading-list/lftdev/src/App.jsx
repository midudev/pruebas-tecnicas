import { useEffect, useState } from 'react'
import BooksJSON from './database/books.json'
import './style.css'
import BookItem from './components/BookItem'
import BooksList from './components/BooksList'
export default function App () {
  const [booksList, setBooksList] = useState([])
  const [readList, setReadList] = useState([])
  // Load book library to state bookList.
  useEffect(() => BooksJSON.library.forEach(bookObject => setBooksList(prevList => [...prevList, bookObject.book])), [])
  function addToReadList (book) {
    setReadList(prevList => [...prevList, book])
  }

  return (
    <>
      <h3>Sin libros en la lista de lectura</h3>
      <main>
        <h1>13 libros disponibles</h1>
        <form role='search'>
          <label htmlFor='pages-filter'>
            <div>Filtrar por páginas</div>
            <input id='pages-filter' type='range' />
          </label>
          <label htmlFor='genre-filter'>
            <div>Filtrar por género</div>
            <select id='genre-filter'>
              <option value='all'>Todos los géneros</option>
            </select>
          </label>
        </form>
        <BooksList initialList={booksList} onItemClick={addToReadList} />
      </main>
      {readList.length > 0 &&
        <aside role='region'>
        </aside>}
    </>
  )
}
