import { useEffect } from 'react'
import { BookList } from './components/BookList'
import { Filters } from './components/Filters'
import { Footer } from './components/Footer'
import { ReadingList } from './components/ReadingList'
import { useBookStore } from './store/bookStore'
import { storage } from './utils/storage'

function App () {
  const { updateBooks, updateReadingList } = useBookStore()

  useEffect(() => {
    // Escucha cambios en el almacenamiento local
    window.addEventListener('storage', handleStorageChange)

    // Elimina el listener al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === storage.books && event.newValue !== null) {
      // Actualiza el estado de Zustand cuando se detecte un cambio en localStorage
      const books = JSON.parse(event.newValue)
      updateBooks(books)
    }

    if (event.key === storage.readingList && event.newValue !== null) {
      // Actualiza el estado de Zustand cuando se detecte un cambio en localStorage
      const readinList = JSON.parse(event.newValue)
      updateReadingList(readinList)
    }
  }
  return (
    <div className='p-1 md:p-4 lg:p-8'>
      <header>
        <h1 className='text-brown-1 p-4 text-3xl mt-2'>Biblioteca</h1>
      </header>
      <main className='md:flex gap-4'>
        <div className='md:w-2/12'>
          <Filters />
        </div>
        <article className='md:w-7/12'>
          <BookList />
        </article>
        <aside className='md:w-3/12'>
          <ReadingList />
        </aside>
      </main>
      <Footer />
    </div>
  )
}

export default App
