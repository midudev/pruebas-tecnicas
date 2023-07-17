import Image from 'next/image'
import type { Book } from '../types'
import {
  PlusCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
interface Props {
  book: Book
  setReadList?: React.Dispatch<React.SetStateAction<Book[]>>
}

export default function BookCard({ book, setReadList }: Props) {
  const addToReadingList = () => {
    if (setReadList === undefined) return
    setReadList((prev) => {
      const alreadyIn = prev.includes(book)
      return !alreadyIn ? [...prev, book] : [...prev]
    })
  }

  return (
    <li className='relative m-auto h-80 w-56 overflow-hidden text-white [&:hover>article]:opacity-80 [&:hover>img]:scale-125'>
      <article className='ease-linear absolute left-0 top-0 z-20 flex h-full w-full flex-col justify-evenly bg-black opacity-0 duration-150'>
        <button
          className='flex cursor-pointer flex-col items-center justify-around text-sm '
          onClick={addToReadingList}
        >
          <PlusCircleIcon className='h-10' />
          <p>ADD TO READING LIST</p>
        </button>
        <Link href={`/book/${book.title}`} className='flex cursor-pointer flex-col items-center justify-center text-sm'>
          <InformationCircleIcon className='h-10' />
          <p>GET MORE INFO</p>
        </Link>
      </article>

      <Image
        src={book.cover}
        alt={book.title}
        width={200}
        height={300}
        className='z-10 h-full w-full duration-500 ease-in-out'
      />
    </li>
  )
}
