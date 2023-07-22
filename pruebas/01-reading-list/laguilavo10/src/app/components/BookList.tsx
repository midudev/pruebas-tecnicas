import { useBooks } from '../context/books'
import BookCard from './BookCard'
import CounterBooks from './CounterBooks'

export default function BookList() {
  // const [isShowingReadList, setIsShowingReadList] = useState<boolean>(true)
  const { state } = useBooks()
  const { length } = state.bookList
  return (
    <section>
      <CounterBooks title='Libros Disponibles' length={length} />
      <ul className='grid w-full grid-cols-auto-fit gap-5 py-2 '>
        {state.bookList.map((book) => (
          <BookCard key={book.ISBN} book={book} action='AddToReadingList' />
        ))}
      </ul>
    </section>
  )
}
