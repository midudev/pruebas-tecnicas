'use client'
import { useBooks } from '../context/books'
import CounterBooks from './CounterBooks'
import BookCard from './BookCard'
interface Props {
  isShowingReadList: boolean
}
export default function ReadingList({ isShowingReadList }: Props) {
  const { state } = useBooks()
  // if (typeof state === 'undefined') return
  const { length } = state?.readingList
  const show = isShowingReadList
    ? '-translate-x-full'
    : 'translate-x-full invisible'

  return (
    <section
      id='readList'
      className={`absolute left-full min-h-full w-full border-l-2 border-slate-500 md:w-[30%] ${show} overflow-auto pb-24 duration-500 ease-in-out`}
    >
      <CounterBooks title='Lista de Lectura' length={length} />
      <ul className='grid grid-cols-auto-fit gap-5 p-2'>
        {state.readingList.map((book) => (
          <BookCard
            book={book}
            action='RemoveFromReadingList'
            orientation='horizontal'
            key={book.ISBN}
          />
        ))}
      </ul>
    </section>
  )
}
