import { useEffect } from 'react'

import { mapBooks } from './utilities'
import { useBooks } from './store'

import { BookFilters, Info, ReadingListBooks, AvailableListBooks } from './components'

import Books from './constants/books.json'

function App() {

  const { setAvailableBooks, readingListBooks, availableBooks } = useBooks()

  useEffect(() => {
    availableBooks.length === 0 && readingListBooks.length === 0 && setAvailableBooks(mapBooks(Books))
  }, [])

  return (
    <main className='w-screen h-screen bg-zinc-900 grid grid-rows-[15%_1fr]'>
      <header className='flex flex-col justify-evenly px-4 border-b border-b-zinc-300'>
        <h1 className='text-4xl text-purple-700'>Libros</h1>
        <BookFilters />
      </header>
      <div className='overflow-hidden grid grid-cols-[1fr_25%] h-full'>
        <AvailableListBooks />
        <ReadingListBooks />
      </div>
      <Info />
    </main>
  )
}

export default App
