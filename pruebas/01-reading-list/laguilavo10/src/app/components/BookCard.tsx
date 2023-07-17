import Image from 'next/image'
import type { Book } from '../types'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { ActionType, useBooks } from '../context/books'
interface Props {
  book: Book
  action: ActionType
}

export default function BookCard({ book, action }: Props) {
  const { dispatch } = useBooks()

  const addToReadingList = () => {
    dispatch({ type: 'AddToReadingList', payload: book })
  }

  const removeFromReadingList = () => {
    dispatch({ type: 'RemoveFromReadingList', payload: book })
  }

  return (
    <li className='min-w-56 relative m-auto h-80 w-auto overflow-hidden rounded-lg text-white outline outline-white [&:hover>article]:opacity-90 [&:hover>img]:scale-125'>
      <article className='absolute left-0 top-0 z-20 flex h-full w-full flex-col justify-evenly bg-black p-3 text-sm opacity-0 duration-300 ease-linear'>
        <h3 className='mt-2 text-lg font-extrabold'>{book.title}</h3>
        <p className='flex items-center gap-2'>
          <BookOpenIcon className='z-50 h-5 fill-[#596886]'>hola</BookOpenIcon>
          {book.pages} pages
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
          onClick={
            action === 'AddToReadingList'
              ? addToReadingList
              : removeFromReadingList
          }
        >
          {action === 'AddToReadingList' ? (
            <PlusCircleIcon className='h-full' title='Add To Reading List' />
          ) : (
            <XCircleIcon className='h-full' title='Remove From Reading List' />
          )}
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
