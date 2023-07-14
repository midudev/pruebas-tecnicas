import { BooksContext } from '../context/BooksContext'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import Filters from './Filters'
export default function AvailableBooksSection () {
  const { availableBooksCounter, availableBooks } = useContext(BooksContext)
  const { addToReadingList } = useContext(UserContext)
  return (
    <section className='bg-red-500 mt-1'>
        <h2 className='p-2'>Available books: {availableBooksCounter}</h2>
        <Filters/>
        <ul className='grid grid-cols-5 gap-1 p-2 items-center'>
            {availableBooks && availableBooks.map(book => <li className='text-center cursor-pointer animate-fade animate-ease-in animate-normal' key={book.ISBN} onClick={() => addToReadingList(book)}>{book.title}</li>)}
        </ul>
    </section>
  )
}
