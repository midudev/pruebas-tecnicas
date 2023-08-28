import { BookLayout } from '../layouts/BookLayout'
import { BookItem } from './'
import { type Book } from '../types'

interface Props {
  books: Book[]
}

export const BooksList = ({ books }: Props) => {
  return (
    <section className="grid grid-cols-2 gap-6 justify-items-center md:grid-cols-3 lg:grid-cols-4">
      {
        books.map((book) => (
          <BookLayout key={book.ISBN} book={book}>
            <BookItem book={book} />
          </BookLayout>
        ))
      }
    </section>
  )
}
