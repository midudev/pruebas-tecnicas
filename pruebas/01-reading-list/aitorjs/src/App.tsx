import { useEffect } from 'react'
import './App.css'
import { useBooksStore } from './store/booksStore'
import Book from './components/Book'
import ReadList from './components/ReadList'
import PageFilter from './components/PageFilter'
import GenreFilter from './components/GenreFilter'
import Header from './components/Header'
import FiltersSelected from './components/FiltersSelected'

function App () {
  const { getBooks, filteredBooks } = useBooksStore()

  useEffect(() => {
    const data: any = window.localStorage.getItem('booksLibrary')
    const isData = JSON.parse(data).state.books.length > 0

    if (!isData) {
      getBooks()
    }
  }, [])

  return (
    <div className='container mx-auto'>
      <Header />

      <section className='bg-purple-100 p-4 mb-8 '>
        <div className='rounded-lg sm:w-[38%] w-[100%] flex justify-center sm:justify-start align-center gap-4'>
          <span className='text-2xl font-medium'>Filtros:</span>

          <div className='flex gap-6 flex-col sm:flex-row'>
            <div className='flex flex-col justify-center align-center'>
              <PageFilter />

            </div>

            <div className='flex flex-col justify-center align-center'>
              <GenreFilter />
            </div>
          </div>
        </div>

        <FiltersSelected />
      </section>

      <div className='flex flex-col sm:flex-row '>
        <div className='flex flex-wrap gap-4 sm:w-4/5 w-[100%]' id='books'>
          {filteredBooks.map(({ book }) => (
            <Book key={book.ISBN} data={book} />
          ))}
        </div>

        <div className='flex flex-col' id='readList'>
          <ReadList />
        </div>
      </div>
    </div>
  )
}

export default App
