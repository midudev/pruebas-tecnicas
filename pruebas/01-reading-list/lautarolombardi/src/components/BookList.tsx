import { type Book as IBook } from '../types/book'

import Book from './Book'

const BookList = ({ books }: { books: IBook[] }) => {
  return (
    <div className="h-full flex-1">
      {
        books.length > 0
          ? <ul className='grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5 justify-items-center'>
            {
              books.map((book) => (
                <Book key={book.ISBN} book={book} />
              ))
            }
          </ul>
          : <div className='h-full flex items-center justify-center'><p>No hay libros que mostrar</p></div>
      }
    </div>
  )
}

export default BookList
