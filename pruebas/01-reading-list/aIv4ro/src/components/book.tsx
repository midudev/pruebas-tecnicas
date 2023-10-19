import { LibraryContext } from '../App'
import { IBook } from '../types/book'
import { Icons } from './icons'
import { useContext } from 'react'

interface Props {
  book: IBook
}

export function Book ({ book }: Props) {
  const { addBookToReadingList } = useContext(LibraryContext)

  function handleClick () {
    addBookToReadingList(book)
  }

  return (
    <button onClick={handleClick} className='group relative rounded overflow-hidden hover:scale-105 transition-transform inline-block'>
      <img className='aspect-[155/232] object-cover' src={book.cover} />
      <div className='transition-all opacity-0 group-hover:opacity-100 absolute inset-0 z-10 bg-zinc-900/70 text-white flex items-center justify-center'>
        <Icons.LibraryAdd />
      </div>
    </button>
  )
}
