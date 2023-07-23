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
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', JSON.stringify('dark'))
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', JSON.stringify('light'))
    }
  }, [theme])
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
              <header className='fixed top-0 z-10 w-full flex 2xl:justify-center 2xl:gap-[50%] bg-white
               items-center left-0 py-[20px] px-0 2xl:px-[150px] dark:bg-[#331D2C] dark:text-gray-300 justify-around'>
                <p className='font-bold text-xl'><BookIconOnly className="absolute left-[26%] 2xl:left-[22%] top-[22px]"/>Books<span className='font-normal'>Inc</span></p>
                <div className='flex gap-6'>
                  <ThemeSwitch changeTheme={handleThemeSwitch}/>
                  {/* Componente botón con icono */}
                    <BookIcon togglePanel={togglePanel} booksInList={list.length}/>
                  <h2 id='title' className='hidden 2xl:block'>Colección de libros</h2>
                </div>
              </header>
              <main className='my-0 mt-52 mx-auto w-[100%]'>
                <section className='filters bg-white z-10 mb-20 flex items-center fixed left-0 w-screen top-[68px] 2xl:py-[20px] p-0 border-slate-100 border-y 2xl:gap-[30%] dark:bg-[#331D2C] dark:text-gray-300 dark:border-[darkslategray] justify-center flex-col 2xl:flex-row py-[15px]'>
                  <p className='w-[250px] border-slate-100 2xl:border py-[5px] shadow-sm rounded dark:border-[darkslategray] dark:bg-[#100c18]'>Libros Disponibles: <span className=' inline-block w-[30px]'>{total}</span></p>
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
