  import './App.css'
import Book from './components/Book'
import ReadingList from './components/ReadingList'
import useBooksStore from './hooks/useBooksStore'
import { selectGenre } from './utils/helpers'


function App() {
  const { books, readingList, countBookAvalaible } = useBooksStore()
  const genre = selectGenre()
  
  return (
    <div className='container'>
      <header>
        <h1>Midu Reading Books Test</h1>
      </header>
      <main className='main_container'>
        <h2>Lista de Libros</h2>
        <p>Libros disponibles: <span>{countBookAvalaible}</span></p>
        <select>
          <option value="">Elige un género</option>
          {
            genre.map(genero => (<option value={genero}>{genero}</option> ) )
          }
        </select>
        <div className='flex gap-2r'>
          <section className={`main_library ${readingList ? 'w-75' : 'w-100'}`}>
          {
            books.map((book) => {
              return (
                <Book book={book} key={book.ISBN}  />
              )
            })
          }
          </section>
          {
            readingList.length > 0 && (
            <section className='w-25'>
              <ReadingList />
            </section>
             )
          }
        </div>
      </main>
    </div>
  )
}

export default App
