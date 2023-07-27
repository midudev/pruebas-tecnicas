import { useState, useEffect, useRef } from 'react'
import getBooks from './utils/getBooks'
// CSS
import './App.css'
import Dialog from './component/Dialog'

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

  const [pages, setPages] = useState(0)
  const [genre, setGenre] = useState('Todos')

  const dialog = useRef(null)
  const baseBooks = useRef([])

  useEffect(() => {
    getBooks().then((allBooks) => {
      baseBooks.current = allBooks.library

      const filteredBooks = allBooks.library.filter(book => (
        !readingList.some(item => item.book.ISBN === book.book.ISBN)
      ))
      setBooks(filteredBooks)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'books') {
        setBooks(JSON.parse(e.newValue))
      }
      if (e.key === 'readingList') {
        setReadingList(JSON.parse(e.newValue))
      }
    }

    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  useEffect(() => {
    handleFilter(baseBooks.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, pages])

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

  const handleFilter = (b) => {
    let filteredBooks = [...b]

    if (genre !== 'Todos') {
      filteredBooks = filteredBooks.filter(book => book.book.genre === genre)
    }

    filteredBooks = filteredBooks.filter(book => book.book.pages >= pages)

    filteredBooks = filteredBooks.filter(book => (
      !readingList.some(item => item.book.ISBN === book.book.ISBN)
    ))

    if (filteredBooks.length === 0 && genre !== 'Todos') {
      setPages(0)
      setGenre('Todos')
      alert('No hay libros disponibles con los filtros seleccionados')
    } else {
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
      <section className='books-container' data-testid='books-container'>
        <h1>Listado de libros disponibles</h1>
        <h2>{books.length} libros disponibles</h2>
        <button className='open-modal-btn' onClick={openModal}>
          Abrir lista de lectura (<span>{readingList.length}</span>)
        </button>
        <div className='filter-container'>
          <label htmlFor='select-genre'>
            <p>Filtrar por género:</p>
            <select
              name='select-genre'
              id='select-genre'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              {GENRES_LIST.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor='page-lenght'>
            <p>Cantidad de páginas: {pages}</p>
            <input
              type='range'
              name='page-lenght'
              min='0' max='1200'
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </label>
        </div>
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
        <Dialog
          readingList={readingList}
          dialog={dialog}
          closeModal={closeModal}
          setReadingList={setReadingList}
          baseBooks={baseBooks}
          setBooks={setBooks}
          setGenre={setGenre}
        />
      </section>
    </>
  )
}

export default App
