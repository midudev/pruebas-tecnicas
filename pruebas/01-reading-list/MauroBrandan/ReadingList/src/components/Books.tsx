import { type BookType } from '../types'
import { Book } from './Book'

export function Books ({ books }: {books: BookType[]}) {
  return (
    <ul className='w-full my-5 grid justify-items-center grid-cols-books gap-x-1 gap-y-16'>
      {books.map((book) => (
        <li key={book.ISBN}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  )
}
