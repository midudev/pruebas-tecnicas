import { useContext } from 'react'
import { LibraryContext } from '../App'
import { Book } from './book'
import { SectionTitle } from './section-title'

export function BookList () {
  const library = useContext(LibraryContext)

  return (
    <>
      <SectionTitle>
        Library books ({library.filteredBooks.length}/{library.remainingBooks})
      </SectionTitle>
      <ul className='flex flex-wrap gap-2'>
        {library.filteredBooks.map(book => (
          <li className='max-w-[10rem]' key={book.ISBN}><Book book={book} /></li>
        ))}
      </ul>
    </>
  )
}
