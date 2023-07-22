import Image from 'next/image'
import { useBooks } from '../context/books'
import CounterBooks from './CounterBooks'
import { MinusCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { Book } from '../types'
interface Props {
  isShowingReadList: boolean
}
export default function ReadingList({ isShowingReadList }: Props) {
  const { state, dispatch } = useBooks()
  const { length } = state.readingList
  const show = isShowingReadList
    ? '-translate-x-full'
    : 'translate-x-full invisible'

  const removeFromReadingList = (book: Book) => {
    dispatch({ type: 'RemoveFromReadingList', payload: book })
  }
  return (
    <section
      id='readList'
      className={`absolute left-full min-h-full w-[30%] border-l-2 border-slate-500 ${show} fixed overflow-auto pb-24 duration-500 ease-in-out`}
    >
      <CounterBooks title='Lista de Lectura' length={length} />
      <ul className='grid grid-cols-auto-fit gap-5 px-2'>
        {state.readingList.map((book) => (
          <div
            className=' relative h-auto w-full overflow-hidden rounded-md border border-slate-500 p-2 text-white'
            onClick={() => removeFromReadingList(book)}
            key={book.ISBN}
          >
            <div className='pointer-cursor absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black text-white opacity-0 hover:opacity-80'>
              <MinusCircleIcon className='h-10 w-10 stroke-white' />
              <p>Eliminar</p>
            </div>
            <Image
              src={book.cover}
              alt={book.title}
              className='absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-25 blur-sm'
              width={200}
              height={200}
            />
            <h5 className='mb-10 font-bold'>{book.title}</h5>
            <p>{book.synopsis}</p>
            <span className='absolute right-0 top-0 flex items-center gap-1 rounded-md bg-slate-500 p-2 text-xs'>
              <BookOpenIcon className='h-5' />
              {book.pages}{' '}
            </span>
          </div>
        ))}
      </ul>
    </section>
  )
}
