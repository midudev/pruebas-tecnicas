import { useEffect, useState } from 'react'
import './App.css'
import data from './services/books.json'

function App () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const { library } = data
    console.log(library)
    setBooks(library)
  }, [])
  return (
    <>
      <h3>Lista de libros</h3>
      {books.length === 0 && <p>No hay libros</p>}

      {books.map(dataBook => {
        const { title, ISBN: id, cover } = dataBook.book
        console.log(title)
        return (
          <div className="book" key={id}>
            <h2>{title}</h2>
            <figure>
              <img src={cover} alt={title} />
            </figure>
          </div>
        )
      })}
    </>
  )
}

export default App
