import './style.css'
import BooksList from './components/BooksList'
import BooksJSON from './database/books.json'
import GenreFilter from './components/GenreFilter'
import PagesFilter from './components/PagesFilter'
import useBooksList from './hooks/useBooksList'
import useReadingList from './hooks/useReadingList'
import { useEffect, useState } from 'react'
import { BOOK_ICON, CLOSE_MARK } from './components/SVGIcon'

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
    <>
      <h3 className='text-2xl font-bold text-blue-500'>{readingList.length > 0 ? 'Con' : 'Sin'} libros en la lista de lectura</h3>
      <div className='border border-white rounded-md pt-10 px-12'>
        <main className='flex flex-col gap-5'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>{availableBooks.length} libros disponibles</h1>
            {readingList.length > 0 && <p className='text-lg'>{readingList.length} en la lista de lectura</p>}
            <form role='search' className='flex flex-col gap-4'>
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
              className='grid grid-cols-2 place-items-center gap-4 sm:'
              list={availableBooks}
              onItemClick={book => {
                addToReadingList(book)
                removeFromAvailables(book)
              }}
              filters={{ genreFilter, pagesFilter }}
            />}
        </main>
        <button
          title='Open reading list' type='button'
          className='fixed bottom-16 right-16 p-5 rounded-full bg-blue-500 flex justify-center items-center z-20'
          onClick={() => setOpenReadingLIst(!openReadingList)}
        >
          {openReadingList ? CLOSE_MARK(32, 32, 'fill-white') : BOOK_ICON(32, 32, 'fill-white')}
        </button>
        {openReadingList && (
          <section className='fixed w-screen h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-[#040412] rounded-lg p-8'>
            <h2 className='text-3xl font-bold'>Lista de lectura</h2>
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
      </div>
    </>
  )
}
