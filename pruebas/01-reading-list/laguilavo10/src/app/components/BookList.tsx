'use client'
import { useBooks } from '../context/books'
import BookCard from './BookCard'
import CounterBooks from './CounterBooks'
import Loader from './Loader'
interface Props {
  isShowingReadList: Boolean
}
export default function BookList({ isShowingReadList }: Props) {
  const { state } = useBooks()
  const { length } = state?.bookList
  return (
    <section
      className='border-r-2 border-slate-500 p-5 transition-transform delay-1000 duration-500 ease-in-out md:block md:translate-x-0 md:border-none'
    >
      <CounterBooks title='Libros Disponibles' length={length} />
      <Loader>
        {length === 0 ? (
          <p className='text-white'>loading</p>
        ) : (
          <ul className='grid w-full grid-cols-auto-fit gap-5 py-2'>
            {state.bookList.map((book) => (
              <BookCard key={book.ISBN} book={book} action='AddToReadingList' />
            ))}
          </ul>
        )}
      </Loader>
    </section>
  )
}
