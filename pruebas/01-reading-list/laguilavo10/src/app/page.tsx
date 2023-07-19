'use client'
import { library } from '../../../books.json'
import { useState } from 'react'
import { BookIcon } from './assets/icons'
import BookCard from './components/BookCard'
import ReadingList from './components/ReadingList'
import { useBooks } from './context/books'
import CounterBooks from './components/CounterBooks'

export default function Home() {
  const [isShowingReadList, setIsShowingReadList] = useState<boolean>(true)
  const { state } = useBooks()
  const { length } = state.bookList
  // const uniqueGenres = new Set(library.map((b) => b.book.genre)) // elimina los genres duplicados
  // const genres = [...uniqueGenres.values()]
  return (
    <>
      <header className='fixed top-0 z-30 flex  h-16 w-screen items-center bg-[#596886] bg-brandImage bg-contain bg-no-repeat px-10 sm:bg-center'>
        <button
          onClick={() => setIsShowingReadList((prev) => !prev)}
          className={`flex gap-3 justify-self-end rounded-lg border-2 border-slate-800 bg-white p-2 text-black  ${
            isShowingReadList ? 'bg-opacity-100' : 'bg-opacity-60'
          } absolute right-14 transition-colors duration-300 ease-linear`}
        >
          <BookIcon />
          <span className='hidden font-bold sm:block'>Reading List</span>
        </button>
      </header>
      <main className='mt-24 '>
        {/* <select
          name='select'
          className='m-auto flex w-72 flex-col items-center px-4 py-3 text-black'
          onChange={(e) => {
            dispatch({ type: 'FilterByGenre', payload: e.target.value })
          }}
        >
          {genres.map((genre) => (
            <option key={genre}>{genre}</option>
          ))}
        </select> */}

        <section
          className={` ${
            isShowingReadList ? 'w-4/6' : 'w-full'
          } z-10 mb-10 flex flex-col gap-5 overflow-x-hidden px-10 transition-all delay-100 duration-300 ease-out`}
        >
          <CounterBooks title='Libros Disponibles' length={length} />
          <ul className='grid w-full grid-cols-auto-fit gap-5 py-2'>
            {state.bookList.map((book) => (
              <BookCard key={book.ISBN} book={book} action='AddToReadingList' />
            ))}
          </ul>
          <ReadingList isShowingReadList={isShowingReadList} />
        </section>
      </main>
    </>
  )
}
