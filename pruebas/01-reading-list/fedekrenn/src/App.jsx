import { useState, useEffect } from 'react'
import getBooks from './utils/getBooks'
// CSS
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books.library)
    })
  }, [])

  console.log(books)

  return (
    <section className='books-container'>
      <h1>Listado de libros</h1>
      <h2>{books.length} libros disponibles</h2>
      <ul>
        {books.map((book) => {
          const { ISBN, cover, title } = book.book
          return (
            <li key={ISBN}>
              <img className='cover-img' src={cover} alt={title} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default App
