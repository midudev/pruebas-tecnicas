import { useEffect, useState } from 'react'
import BooksJSON from './database/books.json'
import './style.css'
import BookItem from './components/BookItem'
export default function App () {
  const [bookList, setBookList] = useState([])
  const [readList, setReadList] = useState([])
  // Load book library to state bookList.
  useEffect(() => BooksJSON.library.forEach(bookObject => setBookList(prevList => [...prevList, bookObject.book])), [])
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
        <ul>
          {bookList.map((book, index) =>
            <li key={index}>
              <BookItem book={book} clickListener={addToReadList} />
            </li>)}
        </ul>
      </main>
      {readList.length > 0 &&
        <aside role='region'>
        </aside>}
    </>
  )
}
