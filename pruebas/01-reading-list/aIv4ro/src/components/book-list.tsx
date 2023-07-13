import { useContext } from 'react'
import { LibraryContext } from '../App'
import { Book } from './book'

export function BookList () {
  const library = useContext(LibraryContext)

  return (
    <ul className='flex flex-wrap gap-2 p-2'>
      {library.filteredBooks.map(book => (
        <li className='max-w-[10rem]' key={book.ISBN}><Book book={book} /></li>
      ))}
    </ul>
  )
}
