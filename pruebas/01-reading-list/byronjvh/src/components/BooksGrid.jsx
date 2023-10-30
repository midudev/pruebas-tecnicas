import { useContext } from 'react'
import { BookCard } from './BookCard'
import { GlobalContext } from '../context/GlobalContext'

export function BooksGrid () {
  const { filteredBooks } = useContext(GlobalContext)
  return (
    <main className='flex justify-center'>
      <div className='w-full max-w-[1000px] grid gap-4 gap-y-8 grid-cols-auto px-3 py-2'>
        {
          filteredBooks?.map((obj, i) => (
            <BookCard data-testid="books-list" key={obj.book.ISBN} title={obj.book.title} img={obj.book.cover} genre={obj.book.genre} year={obj.book.year} ISBN={obj.book.ISBN} />
          ))
        }
      </div>
    </main>
  )
}
