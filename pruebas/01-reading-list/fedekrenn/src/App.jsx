import { useState, useEffect, useRef } from 'react'
import getBooks from './utils/getBooks'
// CSS
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [readingList, setReadingList] = useState([])

  const dialog = useRef(null)

  useEffect(() => {
    getBooks().then((books) => {
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
