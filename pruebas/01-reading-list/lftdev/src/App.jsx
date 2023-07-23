import './style.css'
import BooksList from './components/BooksList'
import GenreFilter from './components/GenreFilter'
import useBooksList from './hooks/useBooksList'
import BooksJSON from './database/books.json'
import PagesFilter from './components/PagesFilter'
import { useEffect, useState } from 'react'

export default function App () {
  // useState hooks
  const [genreFilter, setGenreFilter] = useState('Todos')
  const [pagesFilter, setPagesFilter] = useState(50)
  // Custom hooks
  const {
    availableBooks,
    setAvailableBooks,
    addToAvailables,
    removeFromAvailables,
    readingList,
    setReadingList,
    addToReadingList,
    removeFromReadingList
  } = useBooksList()
  // useEffect hooks
  // Sync data between tabs
  useEffect(() => {
    function handleStorageChange (event) {
      const handlers = {
        availableBooks: () => setAvailableBooks(JSON.parse(event.newValue)),
        readingList: () => setReadingList(JSON.parse(event.newValue))
      }
      handlers[event.key]()
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])
  return (
    <>
      <h3 className='text-2xl font-bold text-blue-500'>{readingList.length > 0 ? 'Con' : 'Sin'} libros en la lista de lectura</h3>
      <div className='grid [grid-template-columns:2fr_1fr] border border-white rounded-md pt-10 px-12'>
        <main className='flex flex-col gap-5'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>{availableBooks.length} libros disponibles</h1>
            {readingList.length > 0 && <p className='text-lg'>{readingList.length} en la lista de lectura</p>}
            <form role='search' className='flex gap-32'>
              <label className='text-lg' htmlFor='pages-filter'>
                <div>Filtrar por páginas</div>
                <PagesFilter
                  id='pages-filter'
                  booksPages={BooksJSON.library.map(bookObj => bookObj.book.pages)}
                  onChange={setPagesFilter}
                  value={pagesFilter}
                />
                <p>A partir de {pagesFilter} páginas</p>
              </label>
              <label className='text-md' htmlFor='genre-filter'>
                <div>Filtrar por género</div>
                <GenreFilter
                  id='genre-filter'
                  className='bg-black'
                  genres={[...new Set(BooksJSON.library.map(bookObj => bookObj.book.genre))]} onItemClick={setGenreFilter}
                />
              </label>
            </form>
          </div>
          {availableBooks.length > 0 &&
            <BooksList
              className='grid grid-cols-4 place-items-start gap-4'
              list={availableBooks}
              onItemClick={book => {
                addToReadingList(book)
                removeFromAvailables(book)
              }}
              filters={{ genreFilter, pagesFilter }}
            />}
        </main>
        {readingList.length > 0 && (
          <aside className='sticky top-0 max-h-screen overflow-y-auto bg-[#040412] rounded-lg p-8' role='region'>
            <h2 className='text-3xl font-bold'>Lista de lectura</h2>
            <BooksList
              className='grid grid-cols-2 place-items-start gap-4'
              list={readingList}
              removableItems
              onRemoveRequest={index => {
                const book = readingList[index]
                addToAvailables(book)
                removeFromReadingList(book)
              }}
            />
          </aside>
        )}
      </div>
    </>
  )
}
