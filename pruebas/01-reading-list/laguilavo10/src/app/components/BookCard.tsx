import Image from 'next/image'
import type { Book } from '../types'
import {
  MinusCircleIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { ActionType, useBooks } from '../context/books'
interface Props {
  book: Book
  action: ActionType
  orientation?: 'horizontal' | 'vertical'
}

export default function BookCard({
  book,
  action,
  orientation = 'vertical'
}: Props) {
  const { dispatch } = useBooks()
  const icon =
    action === 'AddToReadingList' ? (
      <PlusCircleIcon className='h-full' title='Add To Reading List' />
    ) : (
      <MinusCircleIcon className='h-10 w-10 stroke-white' />
    )
  const handleBookAction = () => {
    if (action === 'AddToReadingList') {
      addToReadingList(book)
      return
    }
    removeFromReadingList(book)
  }

  const addToReadingList = (book: Book) => {
    dispatch({ type: 'AddToReadingList', payload: book })
  }

  const removeFromReadingList = (book: Book) => {
    dispatch({ type: 'RemoveFromReadingList', payload: book })
  }

  if (orientation === 'horizontal') {
    return (
      <div
        className=' relative h-auto w-full overflow-hidden rounded-md border border-slate-500 p-2 text-white'
        onClick={handleBookAction}
        key={book.ISBN}
      >
        <div className='pointer-cursor absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black text-white opacity-0 hover:opacity-80'>
          {icon}
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
    )
  }

  return (
    <li className='min-w-56 relative m-auto h-80 w-auto overflow-hidden rounded-lg border-2 border-white text-white [&:hover>article]:opacity-90 [&:hover>img]:scale-125'>
      <article className='absolute left-0 top-0 z-20 flex h-full w-full flex-col justify-evenly bg-black p-3 text-sm opacity-0 duration-300 ease-linear'>
        <h3 className='mt-2 text-lg font-extrabold'>{book.title}</h3>
        <p className='flex items-center gap-2'>
          <BookOpenIcon className='z-50 h-5 fill-[#596886]'>hola</BookOpenIcon>
          {book.pages} paginas
        </p>
        <p>{book.synopsis}</p>
        <p>
          {' '}
          <span className='font-semibold  tracking-wide'>Genero:</span>{' '}
          {book.genre}
        </p>
        <p>
          {' '}
          <span className='font-semibold  tracking-wide'>Author:</span>{' '}
          {book.author?.name}
        </p>

        <button
          className='absolute right-3 top-3 flex h-8 cursor-pointer flex-col items-center justify-around text-sm'
          onClick={handleBookAction}
        >
          {icon}
        </button>
      </article>

      <Image
        src={book.cover}
        alt={book.title}
        width={200}
        height={300}
        className='z-10 h-full w-full duration-300 ease-in-out'
      />
    </li>
  )
}
