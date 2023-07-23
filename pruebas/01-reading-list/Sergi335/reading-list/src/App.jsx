import { useEffect, useState } from 'react'
import { library } from '../data/books.json'
import { ReadingListContext, ReadingListProvider } from './context/ReadListContext'
import { BookIconOnly } from './components/BookIconOnly'
import ListOfBooks from './components/ListOfBooks.jsx'
import Filter from './components/Filter'
import ReadingList from './components/ReadingList'
import BookIcon from './components/ToggleButton'
import Illustration from './components/Illustration'
import ThemeSwitch from './components/ThemeSwitch'
import './App.css'

function App () {
  // Estado de los filtros --> Mover al componente?
  const [filters, setFilters] = useState({
    genre: 'all',
    pages: 0
  })
  // Estado del tema
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  console.log(theme)
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  // Estado del panel
  const [isOpen, setIsOpen] = useState(false)
  const togglePanel = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }
  // Función para devolver los libros filtrados
  const filterBooks = library => {
    return library.filter(item => {
      return (
        (item.book.genre === filters.genre || filters.genre === 'all') &&
        item.book.pages >= filters.pages
      )
    })
  }
  // Función para calcular el número de libros
  const calculateNumberOfBooks = (number, list) => {
    if (list.length > 0 && filters.genre !== 'all') {
      const generoEnLista = list.filter(item => {
        return item.book.genre === filters.genre && item.book.pages >= filters.pages
      })
      return number.length - generoEnLista.length
    }
    if (filters.pages > 0 && list.length > 0) {
      const paginasEnLista = number.filter(item => !list.some(item2 => item2.book.ISBN === item.book.ISBN))
      return paginasEnLista.length
    }

    return number.length - list.length
  }
  return (
    <ReadingListProvider>
      <ReadingListContext.Consumer>
        {context => {
          const { list } = context || {}
          const number = filterBooks(library)
          const total = calculateNumberOfBooks(number, list)
          return (
            <>
              <header className='fixed top-0 z-10 w-full flex justify-between bg-white
               items-center left-0 py-[20px] px-[150px] dark:bg-[#331D2C] dark:text-gray-300'>
                <p className='font-bold text-xl'><BookIconOnly className="absolute left-[234px] top-[22px]"/>Books<span className='font-normal'>Inc</span></p>
                <div className='flex gap-6'>
                  <ThemeSwitch changeTheme={handleThemeSwitch}/>
                  {/* Componente botón con icono */}
                    <BookIcon togglePanel={togglePanel} booksInList={list.length}/>
                  <h2 id='title'>Colección de libros</h2>
                </div>
              </header>
              <main className='my-0 mt-52 mx-auto w-[100%]'>
                <section className='filters bg-white z-10 mb-20 flex items-center fixed left-0 w-screen top-[68px] py-[20px] px-[150px] border-slate-100 border-y justify-between dark:bg-[#331D2C] dark:text-gray-300 dark:border-[darkslategray]'>
                  <p className='w-[250px] border-slate-100 border py-[5px] shadow-sm rounded dark:border-[darkslategray]'>Libros Disponibles: <span className=' inline-block w-[30px]'>{total}</span></p>
                  {/* Componente filtro */}
                  <Filter changeFilters={setFilters} />
                </section>
                <section className='lists flex min-h-[54vh]'>
                  {/* Componente Lista de libros */}
                  {
                    total > 0
                      ? <ListOfBooks books={filterBooks(library)} />
                      : <Illustration />

                  }
                  {/* Componente lista de lectura */}
                  <ReadingList isOpen={isOpen} togglePanel={togglePanel} />
                </section>
              </main>
              <footer className='w-full bg-gray-50 dark:bg-[#331D2C] dark:text-gray-300 flex justify-center items-end pb-4 min-h-[30vh]'>
                <p> 👋 Sergio Sánchez</p>
              </footer>
            </>
          )
        }}
      </ReadingListContext.Consumer>
    </ReadingListProvider>
  )
}

export default App
