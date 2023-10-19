import './style.css'
import BooksList from './components/BooksList'
import BooksJSON from './database/books.json'
import GenreFilter from './components/GenreFilter'
import PagesFilter from './components/PagesFilter'
import useBooksList from './hooks/useBooksList'
import useReadingList from './hooks/useReadingList'
import { useEffect, useState } from 'react'
import { BOOK_ICON, CLOSE_MARK } from './components/SVGIcon'
import Layout from './components/Layout'

export default function App () {
  // useState hooks
  const [genreFilter, setGenreFilter] = useState('Todos')
  const [pagesFilter, setPagesFilter] = useState(50)
  const [openReadingList, setOpenReadingLIst] = useState(false)
  // Custom hooks
  const [
    availableBooks,
    addToAvailables,
    removeFromAvailables
  ] = useBooksList(BooksJSON.library.map(bookObj => bookObj.book))
  const [
    readingList,
    addToReadingList,
    removeFromReadingList
  ] = useReadingList([])
  // useEffect hooks
  // Sync data between tabs
  useEffect(() => {
    function handleStorageChange (event) {
      const handlers = {
        availableBooks: () => addToAvailables(JSON.parse(event.newValue)),
        readingList: () => addToReadingList(JSON.parse(event.newValue))
      }
      handlers[event.key]()
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])
  return (
    <Layout className='max-w-6xl border border-white rounded-md bg-[rgba(0,0,0,.5)] m-8 p-12' title='App lista de lectura'>
      <main className='flex flex-col gap-5'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-4xl'>
            Disponible{availableBooks.length > 1 ? 's' : ''}: {availableBooks.length}
          </h3>
          {readingList.length > 0 &&
            <p className='text-xl font-bold'>
              {readingList.length} en la lista de lectura.
            </p>}
          <form role='search' className='flex flex-col gap-4 md:flex-row md:justify-between'>
            <label className='text-lg' htmlFor='pages-filter'>
              <div>Filtrar por páginas</div>
              <PagesFilter
                id='pages-filter'
                booksPages={BooksJSON.library.map(bookObj => bookObj.book.pages)}
                onChange={setPagesFilter}
                value={pagesFilter}
              />
              <p>Desde {pagesFilter} páginas.</p>
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
        <div className='overflow-y-auto relative'>
          {availableBooks.length > 0 &&
            <BooksList
              className='grid grid-cols-2 place-items-center gap-4 lg:grid-cols-4 max-h-screen'
              list={availableBooks}
              onItemClick={book => {
                addToReadingList(book)
                removeFromAvailables(book)
              }}
              filters={{ genreFilter, pagesFilter }}
            />}
        </div>
      </main>
      <button
        title='Open reading list' type='button'
        className='fixed bottom-16 right-16 p-5 rounded-full bg-amber-600 flex justify-center items-center z-20'
        onClick={() => setOpenReadingLIst(!openReadingList)}
      >
        {openReadingList ? CLOSE_MARK(32, 32, 'fill-white') : BOOK_ICON(32, 32, 'fill-white')}
      </button>
      {openReadingList && (
        <section className='fixed w-screen h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto backdrop-blur rounded-lg p-8'>
          <h2 className='text-5xl font-bold'>Lista de lectura</h2>
          {readingList.length > 0
            ? <BooksList
                className='grid grid-cols-2 place-items-center gap-4'
                list={readingList}
                removableItems
                onRemoveRequest={index => {
                  const book = readingList[index]
                  addToAvailables(book)
                  removeFromReadingList(book)
                }}
              />
            : <p>No has añadido libros a la lista de lectura aún.</p>}
        </section>
      )}
    </Layout>
  )
}
