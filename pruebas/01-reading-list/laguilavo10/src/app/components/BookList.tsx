'use client'
import { useBooks } from '../context/books'
import BookCard from './BookCard'
import CounterBooks from './CounterBooks'
interface Props {
  isShowingReadList: Boolean
}
export default function BookList({ isShowingReadList }: Props) {
  const { state } = useBooks()
  if (typeof state === 'undefined') return
  console.log(state)
  const { length } = state?.bookList
  return (
    <section
      className={`${
        isShowingReadList === true && 'hidden'
      }  transition-transform delay-1000 duration-500 ease-in-out md:block md:translate-x-0`}
    >
      <CounterBooks title='Libros Disponibles' length={length} />
      <ul className='grid w-full grid-cols-auto-fit gap-5 py-2'>
        {state.bookList.map((book) => (
          <BookCard key={book.ISBN} book={book} action='AddToReadingList' />
        ))}
      </ul>
    </section>
  )
}
