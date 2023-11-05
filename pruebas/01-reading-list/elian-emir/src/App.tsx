import {  useState, useEffect } from 'react'
import './css/App.css'
import './css/Utilities.css'
import Book from './components/Book'
import Header from './components/Header'
import ReadingList from './components/ReadingList'
import useBooksStore from './hooks/useBooksStore'
import { selectGenre } from './utils/helpers'
import type{ IBook } from './types'

function App() {
  const [booksByGenre, setBooksByGenre] = useState<IBook[]>([])
  const [widthDevice, setWidthDevice] = useState<number>(window.innerWidth)
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
  // detecta tamaño del dispositivo y para settear estilos
  useEffect(() => {
    const onResize = () => {
      setWidthDevice(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
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
            {
              readingList.length > 0 && widthDevice < 768 && (
                <ReadingList />
              )
            }
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
            {readingList.length > 0 && widthDevice > 768 &&  (
              <section className='w-30'>
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
