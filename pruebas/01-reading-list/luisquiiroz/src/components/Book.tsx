import { useBookStore } from '../store/bookStore'
import { BookType } from '../types/types'

export interface Props {
  book: BookType
}

export function Book ({ book }: Props) {
  // const { title, pages, genre, cover, synopsis, year, isbn, author } = book
  const { title, cover, author, reading } = book
  const { addBookToReadingList, RemoveBookToReadingList } = useBookStore()
  const handleClick = () => {
    if (reading) {
      RemoveBookToReadingList(book)
    } else {
      addBookToReadingList(book)
    }
  }
  const color = reading ? '#face15' : '#fff'
  return (
    <div>
      <div className='relative'>
        <img className='rounded-xl' src={cover} alt={title} loading='lazy' />
        <button className='absolute top-1 right-1 p-2 rounded-full bg-gray-2/50' onClick={handleClick} name='bookmark'>
          <svg xmlns='http://www.w3.org/2000/svg' fill={color} height='16' viewBox='0 -960 960 960' width='16'><path d='M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z' /></svg>
        </button>
      </div>
      <p className='text-brown-1 text-sm font-medium mt-3'>{title}</p>
      <p className='text-2xs mt-1'>by <span className='text-green-700 font-bold'>{author.name}</span></p>
    </div>
  )
}
