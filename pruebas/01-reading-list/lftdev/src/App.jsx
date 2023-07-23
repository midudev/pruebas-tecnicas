import './style.css'
import BooksList from './components/BooksList'
import GenreFilter from './components/GenreFilter'
import useBooksList from './hooks/useBooksList'
import useLocalStorage from './hooks/useLocalStorage'
import { useEffect, useState } from 'react'

export default function App () {
  // useState hooks
  const [genresList, setGenresList] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('Todos')
  // Custom hooks
  const {
    availableBooks,
    setAvailableBooks,
    readList,
    setReadList,
    addToReadList,
    removeFromReadList
  } = useBooksList([])
  const { saveList, getList } = useLocalStorage()
  // useEffect hooks
  // On App mount restore data from local storage if, exists.
  useEffect(() => {
    function restoreAvailableBooks () {
      const list = getList('availableBooks')
      if (list) setAvailableBooks(list)
      else {
        import('./database/books.json')
          .then(BooksJSON => setAvailableBooks(BooksJSON.library.map(bookObj => bookObj.book)))
      }
    }
    function restoreReadList () {
      const list = getList('readList')
      if (list) setReadList(list)
    }
    restoreAvailableBooks()
    restoreReadList()
  }, [])
  // Save changes made to lists to local storage. Wait 5 mills, so not override data on App mount.
  useEffect(() => {
    setTimeout(() => saveList('availableBooks', availableBooks), 5)
  }, [availableBooks])
  useEffect(() => {
    setTimeout(() => saveList('readList', readList), 5)
  }, [readList])
  // Sync data between tabs
  useEffect(() => {
    const handleStorageChange = event => {
      const handlers = {
        availableBooks: () => setAvailableBooks(JSON.parse(event.newValue)),
        readList: () => setReadList(JSON.parse(event.newValue))
      }
      handlers[event.key]()
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])
  // Load books genres list.
  useEffect(() => {
    import('./database/books.json')
      .then(BooksJSON => setGenresList([...new Set(BooksJSON.library.map(bookObj => bookObj.book.genre))]))
  }, [])
  return (
    <>
      <h3 className='text-2xl font-bold text-blue-500'>{readList.length > 0 ? 'Con' : 'Sin'} libros en la lista de lectura</h3>
      <main className='grid [grid-template-columns:2fr_1fr] border border-white rounded-md pt-10 px-12'>
        <aside className='flex flex-col gap-5' role='presentation'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>{availableBooks.length} libros disponibles</h1>
            {readList.length > 0 && <p className='text-lg'>{readList.length} en la lista de lectura</p>}
            <form role='search' className='flex gap-32'>
              <label className='text-lg' htmlFor='pages-filter'>
                <div>Filtrar por páginas</div>
                <input id='pages-filter' type='range' />
              </label>
              <label className='text-md' htmlFor='genre-filter'>
                <div>Filtrar por género</div>
                <GenreFilter id='genre-filter' className='bg-black' genres={genresList} onItemClick={setSelectedGenre} />
              </label>
            </form>
          </div>
          {availableBooks.length > 0 &&
            <BooksList
              className='grid grid-cols-4 place-items-start gap-4'
              list={availableBooks}
              onItemClick={addToReadList}
              filter={selectedGenre}
            />}
        </aside>
        {readList.length > 0 && (
          <aside className='sticky top-0 max-h-screen overflow-y-auto bg-[#040412] rounded-lg p-8' role='region'>
            <h2 className='text-3xl font-bold'>Lista de lectura</h2>
            <BooksList className='grid grid-cols-2 place-items-start gap-4' list={readList} removableItems onRemoveRequest={removeFromReadList} />
          </aside>
        )}
      </main>
    </>
  )
}
