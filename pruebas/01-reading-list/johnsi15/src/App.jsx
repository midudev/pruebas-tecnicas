import { useEffect, useState } from 'react'
import './App.css'
import data from './services/books.json'
import ListBooks from './components/ListBooks'

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

      {<ListBooks books={books}/>}
    </>
  )
}

export default App
