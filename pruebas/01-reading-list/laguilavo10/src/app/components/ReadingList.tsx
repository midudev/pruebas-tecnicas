'use client'
import { useBooks } from '../context/books'
import CounterBooks from './CounterBooks'
import BookCard from './BookCard'
import Loader from './Loader'
interface Props {
  isShowingReadList: boolean
}
export default function ReadingList({ isShowingReadList }: Props) {
  const { state } = useBooks()
  const { length } = state?.readingList

  return (
    <section className='top-20 h-full w-full border-l-2 border-slate-500 duration-500 ease-in-out md:sticky md:h-[calc(100vh-115px)] md:overflow-hidden'>
      <CounterBooks title='Lista de Lectura' length={length} />
      <ul
        className='scrollbar-w-2 grid h-full grid-cols-auto-fit gap-5 p-2 pb-24 scrollbar scrollbar-track-gray-100 scrollbar-thumb-[#596886] md:overflow-auto'
        id='readList'
      >
        <Loader>
          {state.readingList.map((book, index) => (
            <div key={book.ISBN} data-test-id={`libro ${index.toString()}`}>
              <BookCard
                book={book}
                action='RemoveFromReadingList'
                orientation='horizontal'
                key={book.ISBN}
              />
            </div>
          ))}
        </Loader>
      </ul>
    </section>
  )
}
