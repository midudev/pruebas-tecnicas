import { useState, useEffect, useRef } from 'react'
import getBooks from './utils/getBooks'
// CSS
import './App.css'

const GENRES_LIST = [
  'Todos',
  'Zombies',
  'Ciencia ficción',
  'Fantasía',
  'Terror'
]

function App () {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || [])
  const [readingList, setReadingList] = useState(JSON.parse(localStorage.getItem('readingList')) || [])

  const dialog = useRef(null)
  const baseBooks = useRef([])

  useEffect(() => {
    getBooks().then((allBooks) => {
      baseBooks.current = allBooks.library

      if (books.length === 0 && readingList.length === 0) {
        setBooks(allBooks.library)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList))
  }, [readingList])

  const addBookToReadingList = (book) => {
    const filteredBooks = books.filter(item => item.book.ISBN !== book.book.ISBN)

    setBooks(filteredBooks)
    setReadingList([...readingList, book])

    alert('Libro añadido a la lista de lectura')
  }

  const removeBookFromReadingList = (book) => {
    const newReadingList = readingList.filter(item => item.book.ISBN !== book.book.ISBN)
    setReadingList(newReadingList)

    const filteredBooks = baseBooks.current.filter(book => (
      !newReadingList.some(item => item.book.ISBN === book.book.ISBN)
    ))
    setBooks(filteredBooks)

    alert('Libro eliminado de la lista de lectura')
  }

  const handleFilter = (e) => {
    const genre = e.target.value
    if (genre === 'Todos') {
      const filteredBooks = baseBooks.current.filter(book => (
        !readingList.some(item => item.book.ISBN === book.book.ISBN)
      ))

      setBooks(filteredBooks)
    } else {
      const filteredBooks = baseBooks.current.filter(book => (
        book.book.genre === genre && !readingList.some(item => item.book.ISBN === book.book.ISBN)
      ))

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
          {GENRES_LIST.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        {books.length === 0 && readingList.length > 0
          ? (
            <h2>Todos los libros están en la lista de lectura</h2>
            )
          : (
            <ul>
              {books.map((book) => {
                const { ISBN, cover, title } = book.book
                return (
                  <li key={ISBN}>
                    <img
                      className='cover-img'
                      src={cover}
                      alt={title}
                      onClick={() => addBookToReadingList(book)}
                    />
                  </li>
                )
              })}
            </ul>
            )}
      </section>
      <section>
        <dialog id='readingList' ref={dialog}>
          {readingList.length > 0
            ? (
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
                          onClick={() => removeBookFromReadingList(book)}
                        />
                      </li>
                    )
                  })}
                </ul>
              </>
              )
            : (
              <p>No hay libros en la lista de lectura</p>
              )}
          <button onClick={closeModal}>Cerrar</button>
        </dialog>
      </section>
    </>
  )
}

export default App
