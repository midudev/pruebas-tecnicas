import { useEffect, useState } from 'react'

import BookList from '../components/BookList'
import Filters from '../components/Filters'
import { useFilters } from '../hooks/useFilters'
import { useReadingListStore } from '../store/readingList'
import { BOOKS, LIST } from '../app/constants'
import { type Book } from '../types/book'

const BookListPage = () => {
  const { readingList, setReadingList } = useReadingListStore()
  const [selectedList, setSelectedList] = useState<string>(LIST.ALL)
  const { genre, pages, handleGenreChange, handlePagesChange, resetGenreFilter, resetPagesFilter, filteredBooks } =
    useFilters(selectedList)

  useEffect(() => {
    const unsuscribe = onReadListChange(setReadingList)

    return () => {
      unsuscribe()
    }
  }, [])

  const onReadListChange = (
    callback: (readList: Array<Book['ISBN']>) => void
  ) => {
    const getReadList = () => {
      const readList = JSON.parse(
        localStorage.getItem('readingList') ?? '[]'
      ) as Array<Book['ISBN']>

      callback(readList)
    }

    window.addEventListener('storage', getReadList)

    getReadList()

    return () => {
      window.removeEventListener('storage', getReadList)
    }
  }

  return (
    <main className="container flex flex-col gap-10">
      <Filters
        genre={genre}
        handleGenreChange={handleGenreChange}
        handlePagesChange={handlePagesChange}
        pages={pages}
        resetGenreFilter={resetGenreFilter}
        resetPagesFilter={resetPagesFilter}
      />
      <div className="flex justify-center gap-5 items-center md:justify-start">
        <h2
          className={`p-2 font-bold text-sm md:text-lg outline outline-1 cursor-pointer transition-all duration-300 hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] ${selectedList === LIST.ALL ? 'bg-[var(--text-color)] text-[var(--bg-color)]' : 'bg-[var(--bg-color)] text-[var(--text-color)]'}`}
          onClick={() => {
            setSelectedList(LIST.ALL)
          }}
        >
          Todos los libros ({BOOKS.length - readingList.length})
        </h2>
        <h2
          className={`p-2 font-bold text-sm md:text-lg outline outline-1 cursor-pointer transition-all duration-300 hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] ${selectedList === LIST.READING_LIST ? 'bg-[var(--text-color)] text-[var(--bg-color)]' : 'bg-[var(--bg-color)] text-[var(--text-color)]'}`}
          onClick={() => {
            setSelectedList(LIST.READING_LIST)
          }}
        >
          Lista de lectura ({readingList.length})
        </h2>
      </div>
      <BookList books={filteredBooks} />
    </main>
  )
}

export default BookListPage
