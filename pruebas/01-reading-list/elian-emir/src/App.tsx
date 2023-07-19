import './css/App.css'
import Book from './components/Book'
import Header from './components/Header'
import ReadingList from './components/ReadingList'
import useBooksStore from './hooks/useBooksStore'
import { selectGenre } from './utils/helpers'

function App() {
  const { books, readingList, countBookAvalaible, setFilterByGenre } =
    useBooksStore()
  const genre = selectGenre()
  const handleChangeGenre = (genero: string) => {
    if (genero === '') {
      return
    }
    setFilterByGenre(genero)
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
              {books.map((book) => {
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
