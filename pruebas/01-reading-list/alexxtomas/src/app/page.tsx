'use client'
import BooksHeader from '@/components/BooksHeader'
import BooksList from '@/components/BooksList'
import Error from '@/components/Error'
import Filters from '@/components/Filters'
import Loading from '@/components/Loading'
import ReadingList from '@/components/ReadingList'
import FiltersProvider from '@/contexts/FiltersContext'
import { useFetch } from '@/hooks/useFetch'
import { getBooks } from '@/services/books'
import type { Book } from '@/types'
import { getGenres } from '@/utils/functions'

export default function Home() {
  const booksFromLocalStorage: Book[] | null = JSON.parse(localStorage.getItem('books') as string)

  const {
    data: booksFromApi,
    error,
    loading
  } = useFetch({
    fetch: getBooks,
    active: booksFromLocalStorage ? false : true,
    localStorageKey: 'books'
  })

  const books = booksFromLocalStorage || booksFromApi || []

  const genres = getGenres(books)

  const range = {
    id: 'page-filter',
    max: Math.max(...books.map((book) => book.pages))
  }

  const selectOptions = [
    { value: '', label: 'Todos' },
    ...genres.map((genre) => {
      return {
        value: genre.toLowerCase().replace(/\s/g, '-'),
        label: genre
      }
    })
  ]

  if (error) {
    return <Error />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <main className='grid grid-cols-6 max-w-5xl gap-10 mx-auto pb-10 '>
        <FiltersProvider>
          <article className='flex flex-col gap-8 col-span-4'>
            <BooksHeader
              title={`${books.length} libros disponibles`}
              subtitle={`2 en la lista de lectura`}
            />
            <Filters
              range={range}
              rangeLabel='Filtrar por páginas'
              selectLabel='Filtrar por género'
              selectOptions={selectOptions}
            />

            <section>
              <BooksList books={books} />
            </section>
          </article>

          <article className=' bg-zinc-700 border rounded-md col-span-2 py-4 px-8 relative'>
            <ReadingList />
          </article>
        </FiltersProvider>
      </main>
    </>
  )
}
