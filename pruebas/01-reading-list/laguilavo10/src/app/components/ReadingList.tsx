import { useBooks } from '../context/books'
import BookCard from './BookCard'
import CounterBooks from './CounterBooks'

interface Props {
  isShowingReadList: boolean
}
export default function ReadingList({ isShowingReadList }: Props) {
  const { state } = useBooks()
  const { length } = state.readingList
  const show = isShowingReadList
    ? '-translate-x-full'
    : 'translate-x-full invisible'

  return (
    <section
      id='readList'
      className={`fixed left-full h-full w-[32%] border-l-2 border-slate-500 ${show} fixed overflow-auto pb-24 duration-500 ease-in-out`}
    >
      <CounterBooks title='Lista de Lectura' length={length} />
      <ul className='grid grid-cols-auto-fit gap-5 px-2 py-5'>
        {state.readingList.map((book) => (
          <BookCard
            book={book}
            key={book.ISBN}
            action='RemoveFromReadingList'
          />
        ))}
      </ul>
    </section>
  )
}
