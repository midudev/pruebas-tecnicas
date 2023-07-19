import { type Book } from '../types'
import { BookItem } from './BookItem'
import { NotFound } from './NotFound'

interface Props {
  books: Book[]
}

export const BookList: React.FC<Props> = ({ books }) => {
  if (books.length === 0) {
    return <NotFound />
  }

  return (
		<ul className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 w-full h-full overflow-hidden overflow-y-scroll">
			{books.map(book => <BookItem key={book.title} book={book} />)}
		</ul>
  )
}
