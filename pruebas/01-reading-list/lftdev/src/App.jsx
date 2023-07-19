import { useEffect, useState } from 'react'
import BooksJSON from './database/books.json'
import './style.css'
import BooksList from './components/BooksList'
export default function App () {
  const [booksList, setBooksList] = useState([])
  const [readList, setReadList] = useState([])
  const [readListAvailable, setReadListAvailable] = useState(false)
  // Load JSON books library to state bookList.
  useEffect(() => BooksJSON.library.forEach((bookObject) => setBooksList((prevList) => [...prevList, bookObject.book])), [])

  function addToReadList (book) {
    setBooksList(prevList => prevList.filter(item => item !== book))
    setReadList((prevList) => [...prevList, book])
    if (!readListAvailable) setReadListAvailable(true)
  }
  function removeFromReadList (index) {
    setReadList((prevList) => {
      setBooksList(prev => [...prev, prevList[index]])
      const newList = prevList.toSpliced(index, 1)
      if (newList.length === 0) setReadListAvailable(false)
      return newList
    })
  }

  return (
    <>
      <h3 className='text-2xl text-blue-500'>{readListAvailable ? 'Con' : 'Sin'} libros en la lista de lectura</h3>
      <main className='grid [grid-template-columns:2fr_1fr] border border-white rounded-md pt-10 px-12'>
        <aside className='flex flex-col gap-5'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl'>{booksList.length} libros disponibles</h1>
            {readListAvailable && <p className='text-lg'>{readList.length} en la lista de lectura</p>}
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
          <BooksList className='grid grid-cols-4 place-items-start gap-4' list={booksList} onItemClick={addToReadList} />
        </aside>
        {readListAvailable && (
          <aside className='sticky top-0 max-h-screen overflow-y-scroll bg-[#040412] rounded-lg p-8' role='region'>
            <h2 className='text-3xl'>Lista de lectura</h2>
            <BooksList className='grid grid-cols-2 place-items-start gap-4' list={readList} removableItems onRemoveRequest={removeFromReadList} />
          </aside>
        )}
      </main>
    </>
  )
}
