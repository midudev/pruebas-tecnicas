import { useStore } from '../store/bookStore'
import { IBook } from '../types/book'
import { Books } from './icons'

export default function ReadingList() {
  const { readingList, totalReadingList } = useStore()

  return (
    <div className='flex flex-col gap-6 pr-3 '>
      <header className='flex justify-between'>
        <div className='mb-2 flex items-center justify-center gap-1 text-orange-400'>
          <span>
            <Books />
          </span>
          <h2 className='text-lg  font-medium'>Lista de lectura</h2>
        </div>
        <span className='h-fit rounded-full bg-orange-500 px-2 py-[1px] font-semibold text-white'>
          {totalReadingList}
        </span>
      </header>

      {readingList.map((book: IBook) => (
        <div
          key={book.ISBN}
          className='flex items-center justify-start gap-2 rounded-full pr-2 transition-colors hover:bg-orange-100  hover:text-black  hover:shadow   
          '>
          <img
            src={book.cover}
            className='h-10 w-10 rounded-full object-cover  transition-transform hover:scale-110 '
          />
          <h1>{book.title}</h1>
        </div>
      ))}
    </div>
  )
}
