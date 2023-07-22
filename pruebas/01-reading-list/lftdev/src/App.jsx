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
    addToReadList,
    removeFromReadList,
    readListHasBooks
  } = useBooksList([])
  const { saveList, getList } = useLocalStorage()
  // useEffect
  // On App mount restore data from local storage if, exists.
  useEffect(() => {
    let list = getList('availableBooks')
    if (list) setAvailableBooks(list)
    else {
      import('./database/books.json')
        .then(BooksJSON => {
          list = BooksJSON.library.map(bookObj => bookObj.book)
          saveList('availableBooks', list)
          setAvailableBooks(list)
        })
    }
  }, [])
  return (
    <>
      <h3 className='text-2xl font-bold text-blue-500'>{readListHasBooks ? 'Con' : 'Sin'} libros en la lista de lectura</h3>
      <main className='grid [grid-template-columns:2fr_1fr] border border-white rounded-md pt-10 px-12'>
        <aside className='flex flex-col gap-5' role='presentation'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>{availableBooks.length} libros disponibles</h1>
            {readListHasBooks && <p className='text-lg'>{readList.length} en la lista de lectura</p>}
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
          <BooksList
            className='grid grid-cols-4 place-items-start gap-4'
            list={availableBooks}
            onItemClick={book => {
              addToReadList(book)
            }}
          />
        </aside>
        {readListHasBooks && (
          <aside className='sticky top-0 max-h-screen overflow-y-auto bg-[#040412] rounded-lg p-8' role='region'>
            <h2 className='text-3xl font-bold'>Lista de lectura</h2>
            <BooksList className='grid grid-cols-2 place-items-start gap-4' list={readList} removableItems onRemoveRequest={removeFromReadList} />
          </aside>
        )}
      </main>
    </>
  )
}
