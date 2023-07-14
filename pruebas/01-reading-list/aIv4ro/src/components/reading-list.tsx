import { LibraryContext } from '../App'
import { useContext } from 'react'
import { Icons } from './icons'
import { IBook } from '../types/book'

export function ReadingList () {
  const { readingList, removeBookFromReadingList } = useContext(LibraryContext)

  const handleRemoveBook = (book: IBook) => {
    removeBookFromReadingList(book)
  }

  return (
    <div>
      <h3 className='text-xl font-semibold'>Pending list</h3>
      <ul className='flex flex-col gap-3 mt-44 py-2 px-10 justify-center items-center'>
        {readingList.map((book) => (
          <li key={book.ISBN} className='relative rounded overflow-hidden w-52 -mt-44 transition-transform hover:scale-105 inline-block'>
            <img src={book.cover} className='w-full object-cover aspect-[155/232]' />
            <button onClick={() => handleRemoveBook(book)} className='absolute right-2 top-2 bg-zinc-950/70 text-white rounded-md p-1'>
              <Icons.X />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
