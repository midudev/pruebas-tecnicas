import { useState, useEffect, useRef, useMemo } from 'react'
import getBooks from './utils/getBooks'
import { FadeLoader } from 'react-spinners'
import Dialog from './component/Dialog'
import './App.css'

const GENRES_LIST = [
  'Todos',
  'Zombies',
  'Ciencia ficción',
  'Fantasía',
  'Terror'
]

function App () {
  const [books, setBooks] = useState([])
  const [readingList, setReadingList] = useState(JSON.parse(localStorage.getItem('readingList')) || [])

  const [pagesFilter, setPagesFilter] = useState(0)
  const [genreFilter, setGenreFilter] = useState(GENRES_LIST[0])

  const [loading, setLoading] = useState(true)

  const dialog = useRef(null)
  const baseBooks = useRef([])

  useEffect(() => {
    getBooks().then((allBooks) => {
      baseBooks.current = allBooks.library

      const filteredBooks = allBooks.library.filter(book => (
        !readingList.some(item => item.book.ISBN === book.book.ISBN)
      ))
      setBooks(filteredBooks)
      setLoading(false)
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

  const filteredBooks = useMemo(() => {
    const result = books.filter(({ book }) => {
      if (genreFilter !== GENRES_LIST[0] && book.genre !== genreFilter) {
        return false
      }

      if (book.pages < pagesFilter) {
        return false
      }

      return true
    })

    if (result.length === 0 && genreFilter !== GENRES_LIST[0]) {
      setGenreFilter(GENRES_LIST[0])
      setPagesFilter(0)
      alert('No hay libros que coincidan con los filtros seleccionados')
    }

    return result
  }, [genreFilter, books, pagesFilter])

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
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              {GENRES_LIST.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor='page-lenght'>
            <p>Filtrar por cantidad mínima de páginas: {pagesFilter}</p>
            <input
              type='range'
              name='page-lenght'
              min='0' max='1200'
              value={pagesFilter}
              onChange={(e) => setPagesFilter(e.target.value)}
            />
          </label>
        </div>
        {books.length === 0 && !loading && (<h2>Todos los libros están en la lista de lectura</h2>)}
        {loading
          ? <FadeLoader color='#fff' cssOverride={{ display: 'block', margin: '20px auto' }} />
          : (
            <ul>
              {filteredBooks?.map((book) => {
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
          setGenreFilter={setGenreFilter}
        />
      </section>
    </>
  )
}

export default App
