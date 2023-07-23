import './style.css'
import BooksList from './components/BooksList'
import GenreFilter from './components/GenreFilter'
import useLocalStorage from './hooks/useLocalStorage'
import { useEffect, useState } from 'react'
import BooksJSON from './database/books.json'

export default function App () {
  // useState hooks
  const [genresList, setGenresList] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('Todos')
  // Custom hooks
  const [avBooks, setAvBooks] = useLocalStorage('availableBooks', BooksJSON.library.map(bookObj => bookObj.book))
  const [rdList, setRdList] = useLocalStorage('rdList', [])
  // useEffect hooks
  // Load books genres list.
  useEffect(() =>
    setGenresList([...new Set(BooksJSON.library.map(bookObj => bookObj.book.genre))])
  , [])
  // Sync data between tabs
  /* useEffect(() => {
    function handleStorageChange (event) {
      const handlers = {
        availableBooks: () => setAvailableBooks(JSON.parse(event.newValue)),
        rdList: () => setrdList(JSON.parse(event.newValue))
      }
      handlers[event.key]()
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, []) */
  return (
    <>
      <h3 className='text-2xl font-bold text-blue-500'>{rdList.length > 0 ? 'Con' : 'Sin'} libros en la lista de lectura</h3>
      <div className='grid [grid-template-columns:2fr_1fr] border border-white rounded-md pt-10 px-12'>
        <main className='flex flex-col gap-5'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>{avBooks.length} libros disponibles</h1>
            {rdList.length > 0 && <p className='text-lg'>{rdList.length} en la lista de lectura</p>}
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
          {avBooks.length > 0 &&
            <BooksList
              className='grid grid-cols-4 place-items-start gap-4'
              list={avBooks}
              onItemClick={book => {
                setAvBooks(avBooks.filter(item => item !== book))
                setRdList(rdList.toSpliced(rdList.length, 1, book))
              }}
              filter={selectedGenre}
            />}
        </main>
        {rdList.length > 0 && (
          <aside className='sticky top-0 max-h-screen overflow-y-auto bg-[#040412] rounded-lg p-8' role='region'>
            <h2 className='text-3xl font-bold'>Lista de lectura</h2>
            <BooksList
              className='grid grid-cols-2 place-items-start gap-4'
              list={rdList}
              removableItems
              onRemoveRequest={index => {
                setAvBooks(avBooks.toSpliced(avBooks.length, 1, rdList[index]))
                setRdList(rdList.toSpliced(index, 1))
              }}
            />
          </aside>
        )}
      </div>
    </>
  )
}
