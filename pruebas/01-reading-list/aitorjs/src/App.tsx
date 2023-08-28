import { ReactElement, useEffect } from 'react'
// import './App.css'
import { useBooksStore } from './store/booksStore'
import Book from './components/Book'
import ReadList from './components/ReadList'
import PageFilter from './components/PageFilter'
import GenreFilter from './components/GenreFilter'
import Header from './components/Header'
import Footer from './components/Footer'
import LibraryInfo from './components/LibraryInfo'

function App (): ReactElement {
  const { getBooks, filteredBooks } = useBooksStore()

  useEffect(() => {
    const data: any = window.localStorage.getItem('booksLibrary')
    const isData = JSON.parse(data).state.books.length > 0

    if (!isData) {
      getBooks()
    }
  }, [])

  return (
    <div className='min-h-full bg-purple-100 '>
      <Header />

      <section className='bg-slate-50 p-8 px-10 lg:px-56 mb-8 w-[100%] flex flex-col sm:flex-row gap-14'>
        <LibraryInfo />

        <div className='rounded-lg w-[100%] sm:w-1/3 flex flex-col justify-center gap-4'>
          <div className='flex flex-col justify-center'>
            <PageFilter />

          </div>

          <div className='flex flex-col justify-center'>
            <GenreFilter />
          </div>
        </div>
      </section>

      <section className='flex flex-col sm:flex-row mb-8'>
        <div className='flex flex-wrap pl-20 lg:pl-40 xl:pl-56 gap-4 xl:w-[73.8%] lg:w-[90%] w-[100%]' id='books'>
          {filteredBooks.map(({ book }) => (
            <Book key={book.ISBN} data={book} />
          ))}
        </div>

        <div className='flex flex-col pl-20 sm:pl-0' id='readList'>
          <ReadList />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
