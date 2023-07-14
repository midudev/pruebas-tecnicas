import { useContext } from 'react'
import { LibraryContext } from '../App'
import { Book } from './book'

export function BookList () {
  const library = useContext(LibraryContext)

  return (
    <div className='p-2'>
      <h3 className='text-xl font-semibold mb-2'>Library books ({library.remainingBooks} left)</h3>
      <ul className='flex flex-wrap gap-2'>
        {library.filteredBooks.map(book => (
          <li className='max-w-[10rem]' key={book.ISBN}><Book book={book} /></li>
        ))}
      </ul>
    </div>
  )
}
