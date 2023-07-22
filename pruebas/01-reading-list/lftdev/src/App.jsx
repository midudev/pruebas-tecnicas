import './style.css'
import BooksList from './components/BooksList'
import useBooksList from './hooks/useBooksList'
import useLocalStorage from './hooks/useLocalStorage'
import { useEffect } from 'react'

export default function App () {
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
      let list = getList('availableBooks')
      if (list) setAvailableBooks(list)
      else {
        import('./database/books.json')
          .then(BooksJSON => {
            list = BooksJSON.library.map(bookObj => bookObj.book)
            setAvailableBooks(list)
          })
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
    const handleStorageChange = (event) => {
      if (event.key === 'availableBooks') {
        setAvailableBooks(JSON.parse(event.newValue))
      } else if (event.key === 'readList') {
        setReadList(JSON.parse(event.newValue))
      }
    }
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [setAvailableBooks, setReadList])
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
                <select className='bg-black' id='genre-filter'>
                  <option value='all'>Todos</option>
                </select>
              </label>
            </form>
          </div>
          {availableBooks.length > 0 &&
            <BooksList
              className='grid grid-cols-4 place-items-start gap-4'
              list={availableBooks}
              onItemClick={book => {
                addToReadList(book)
              }}
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
