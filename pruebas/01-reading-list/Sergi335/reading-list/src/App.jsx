import { useState } from 'react'
import { library } from '../data/books.json'
import { ReadingListContext, ReadingListProvider } from './context/ReadListContext'
import { BookIconOnly } from './components/BookIconOnly'
import ListOfBooks from './components/ListOfBooks.jsx'
import Filter from './components/Filter'
import ReadingList from './components/ReadingList'
import BookIcon from './components/ToggleButton'
import Illustration from './components/Illustration'
import ThemeSwitch from './components/ThemeSwitch'
import Modal from './components/Modal'
import Search from './components/Search'
import './App.css'

function App () {
  // Estado de los filtros --> Mover al componente?
  const [filters, setFilters] = useState({
    genre: 'all',
    pages: 0
  })
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
              <header className='fixed top-0 z-10 w-full flex 2xl:justify-center 2xl:gap-[15.5%] bg-white
               items-center left-0 py-[20px] px-0 2xl:px-[150px] dark:bg-[#331D2C] dark:text-gray-300 justify-around'>
                <p className='font-bold text-xl'><BookIconOnly className="absolute left-[31%] 2xl:left-[21.6%] top-[22px]"/>Books<span className='font-normal'>Inc</span></p>
                <Search books={library}/>
                <div className='flex gap-6'>
                  <ThemeSwitch />
                  {/* Componente botón con icono */}
                    <BookIcon togglePanel={togglePanel} booksInList={list.length}/>
                  <h2 id='title' className='hidden 2xl:block'>Colección de libros</h2>
                </div>
              </header>
              <main className='my-0 mt-60 mx-auto w-[100%] 2xl:min-h-[79vh]'>
                <section className='filters bg-white z-10 mb-20 flex items-center fixed left-0 w-screen top-[68px] 2xl:py-[20px] p-0 border-slate-100 border-y 2xl:gap-[30%] 2xl:dark:bg-[#331D2C] dark:text-gray-300 dark:border-[darkslategray] justify-center flex-col 2xl:flex-row py-[15px] dark:bg-[#100c18]'>
                  <p className='w-[250px] border-slate-100 2xl:border py-[5px] 2xl:shadow-sm rounded dark:bg-[#100c18] dark:2xl:border-0'>Libros Disponibles: <span className=' inline-block w-[30px]'>{total}</span></p>
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
              <Modal list={list}/>
              </main>
              <footer className='w-full bg-gray-50 dark:bg-[#331D2C] dark:text-gray-300 flex justify-center items-center min-h-[5vh]'>
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
