import {  useState } from 'react'
import './css/App.css'
import Book from './components/Book'
import Header from './components/Header'
import ReadingList from './components/ReadingList'
import useBooksStore from './hooks/useBooksStore'
import { selectGenre } from './utils/helpers'
import type{ IBook } from './types'

function App() {
  const [booksByGenre, setBooksByGenre] = useState<IBook[]>([])
  const { books, readingList, countBookAvalaible } = useBooksStore()
  // trae los géneros de todos los libros
  const genre = selectGenre()
  // function para filtro por género
  const filterBooks = (search:string) => {
    return books.filter(book => book.genre === search)
  }
  // handle change del select
  const handleChangeGenre = (genero: string) => {
    if (genero === '') return
    setBooksByGenre(filterBooks(genero))
  }
  return (
    <>
      <Header />
      <div className='container'>
        <main className='main_container'>
          <div className='subheading-info'>
            <h2 className='heading'>Lista de Libros</h2>
            <p >
              Libros disponibles: <span>{countBookAvalaible}</span>
            </p>
            <p >
              Libros por género: <span>{booksByGenre.length}</span>
            </p>
            <form>
              <select onChange={(e) => handleChangeGenre(e.target.value)}>
                <option value=''>Elige un género</option>
                {genre.map((genero, index) => (
                  <option value={genero} key={index}>
                    {genero}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className='flex gap-2r'>
            <section
              className={`main_library ${readingList ? 'w-75' : 'w-100'}`}
            >
              {booksByGenre.length > 0
              ? booksByGenre.map((book) => {
                return <Book book={book} key={book.ISBN} />
              }) 
              : books.map((book) => {
                return <Book book={book} key={book.ISBN} />
              })}
            </section>
            {readingList.length > 0 && (
              <section className='w-25'>
                <ReadingList />
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
