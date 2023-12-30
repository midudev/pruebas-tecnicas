import { IoMdAdd } from 'react-icons/io'

import { type Book as IBook } from '../types/book'
import { useReadingListStore } from '../store/readingList'
const Book = ({ book }: { book: IBook }) => {
  const { readingList, toggleBook } = useReadingListStore()

  return (
    <li className='relative max-w-[230px] text-center md:text-left' title={book.title}>
      <img alt={book.title} className='w-full aspect-[9/14] object-cover outline outline-2' src={book.cover} />
      <h3 className='mt-2 font-bold'>{book.title}</h3>
      <h4>{book.author.name}</h4>
      <p className='text-sm'>{book.genre}</p>
      <span className='absolute top-0 right-0 p-1 bg-[var(--bg-color)] transition-all duration-300 cursor-pointer hover:bg-[var(--hover-color)]' onClick={() => { toggleBook(book.ISBN) }}><IoMdAdd className={`text-[var(--text-color)] text-2xl transition-all duration-300 ${readingList.includes(book.ISBN) ? 'rotate-45' : 'rotate-0'}`} /></span>
    </li>
  )
}

export default Book
