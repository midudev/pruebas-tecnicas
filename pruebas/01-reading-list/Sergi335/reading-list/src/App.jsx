import { useState } from 'react'
import { library } from '../data/books.json'
import ListOfBooks from './components/ListOfBooks.jsx'
import Filter from '../src/components/Filter'
import './App.css'
import ReadingList from './components/ReadingList'
import { ReadingListContext, ReadingListProvider } from './context/ReadListContext'

function App () {
  const [filters, setFilters] = useState({
    genre: 'all',
    pages: 0
  })

  const filterBooks = library => {
    return library.filter(item => {
      return (
        (item.book.genre === filters.genre || filters.genre === 'all') &&
        item.book.pages >= filters.pages
      )
    })
  }
  const calculateNumberOfBooks = (number, list) => {
    if (list.length > 0 && filters.genre !== 'all') {
      const generoEnLista = list.filter(item => {
        return item.book.genre === filters.genre && item.book.pages >= filters.pages
      })
      console.log(number.length - generoEnLista.length)
      return number.length - generoEnLista.length
    }
    if (filters.pages > 0 && list.length > 0) {
      const paginasEnLista = number.filter(item => !list.some(item2 => item2.book.ISBN === item.book.ISBN))
      console.log(paginasEnLista.length)
      return paginasEnLista.length
    }

    return number.length - list.length
  }
  return (
    <ReadingListProvider>
      <ReadingListContext.Consumer>
        {context => {
          const { list } = context || {}

          console.log(context)
          const number = filterBooks(library)
          console.log(number)
          console.log(list)
          const total = calculateNumberOfBooks(number, list)

          return (
            <>
              <header className='fixed top-0 z-10 w-full flex justify-between bg-white
               items-center left-0 py-[20px] px-[150px]'>
                <p className='font-bold text-xl'>Books<span className='font-normal'>Inc</span></p>
                <h2>Colección de libros</h2>
              </header>
              <main className='my-0 mt-32 mx-auto w-[100%]'>
                <section className='filters bg-white z-10 mb-20 flex items-center fixed left-0 w-screen top-[68px] py-[20px] px-[150px] border-slate-100 border justify-between'>
                  <p className='w-[250px] border-slate-100 border py-[5px] shadow-sm rounded'>Libros Disponibles: <span className=' inline-block w-[30px]'>{total}</span></p>
                  <Filter changeFilters={setFilters} />
                </section>
                <section className='lists flex'>
                  <ListOfBooks books={filterBooks(library)} />
                  <ReadingList />
                </section>
              </main>
            </>
          )
        }}
      </ReadingListContext.Consumer>
    </ReadingListProvider>
  )
}

export default App
