import { useEffect } from 'react'

import { mapBooks } from './utilities'

import { BookFilters, Info, ReadingListBooks } from './components'

import Books from './constants/books.json'
import { useBooks } from './store'
import AvailableBooks from './components/AvailableBooks'

function App() {

  const { setAvailableBooks, availableBooks } = useBooks()

  useEffect(() => {
    availableBooks.length === 0 && setAvailableBooks(mapBooks(Books))
  }, [])

  return (
    <main className='w-screen h-screen bg-zinc-900 flex relative z-0'>
      <section className='basis-4/5 h-full p-4 flex gap-4 flex-col'>
        <header className='h-12 flex items-center justify-between'>
          <h1 className='text-purple-700 text-4xl'>{availableBooks.length} libros disponibles</h1>
          <BookFilters />
        </header>
        <hr className='border border-zinc-300' />
        <AvailableBooks />
      </section>
      <ReadingListBooks />
      <Info />
    </main>
  )
}

export default App
