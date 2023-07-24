import { useState, useEffect, useRef } from 'react'
import getBooks from './utils/getBooks'
// CSS
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [readingList, setReadingList] = useState([])

  const dialog = useRef(null)
  let genres = useRef([])
  let baseBooks = useRef([])

  useEffect(() => {
    getBooks().then((books) => {
      const allGenres = books.library.map((book) => book.book.genre)
      genres.current = ['Todos', ...new Set(allGenres)]

      baseBooks.current = books.library
      setBooks(books.library)
    })
  }, [])

  const handleAddBook = (book) => {
    const filteredBooks = books.filter(
      (item) => item.book.ISBN !== book.book.ISBN
    )
    setBooks(filteredBooks)
    setReadingList([...readingList, book])
    alert('Libro añadido a la lista de lectura')
  }

  const handleRemoveBook = (book) => {
    const newReadingList = readingList.filter(
      (item) => item.book.ISBN !== book.book.ISBN
    )
    setReadingList(newReadingList)
    setBooks([...books, book])
  }

  const handleFilter = (e) => {
    const genre = e.target.value
    if (genre === 'Todos') {
      setBooks(baseBooks.current)
    } else {
      const filteredBooks = baseBooks.current.filter(
        (book) => book.book.genre === genre
      )
      setBooks(filteredBooks)
    }
  }

  const openModal = () => {
    dialog.current.showModal()
  }

  const closeModal = () => {
    dialog.current.close()
  }

  return (
    <>
      <section className='books-container'>
        <h1>Listado de libros disponibles</h1>
        <h2>{books.length} libros disponibles</h2>
        <button className='open-modal-btn' onClick={openModal}>
          Abrir lista de lectura (<span>{readingList.length}</span>)
        </button>
        <label htmlFor='select-genre'>Filtrar por género:</label>
        <select name='select-genre' id='select-genre' onChange={handleFilter}>
          {genres.current.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <ul>
          {books.map((book) => {
            const { ISBN, cover, title } = book.book
            return (
              <li key={ISBN}>
                <img
                  className='cover-img'
                  src={cover}
                  alt={title}
                  onClick={() => handleAddBook(book)}
                />
              </li>
            )
          })}
        </ul>
      </section>
      <section>
        <dialog id='readingList' ref={dialog}>
          {readingList.length > 0 ? (
            <>
              <h2>Lista de lectura</h2>
              <ul>
                {readingList.map((book) => {
                  const { ISBN, cover, title } = book.book
                  return (
                    <li key={ISBN}>
                      <img
                        className='cover-img'
                        src={cover}
                        alt={title}
                        onClick={() => handleRemoveBook(book)}
                      />
                    </li>
                  )
                })}
              </ul>
            </>
          ) : (
            <p>No hay libros en la lista de lectura</p>
          )}
          <button onClick={closeModal}>Cerrar</button>
        </dialog>
      </section>
    </>
  )
}

export default App
