//COMPONENTS
import { Eye } from './icons'

//HOOKS
import { useState } from 'react'
import { useStore } from '../store/bookStore'

//LIB
import { cn } from '../lib/cn'

//TYPES
import { IBook } from '../types/book'
import { Link } from 'wouter'

export default function Book({ bookData }: { bookData: IBook }) {
  const [showOptions, setShowOptions] = useState(false)
  const { addToReadingList, readingList } = useStore()
  const isReading = readingList.find(
    (book: IBook) => book.ISBN === bookData.ISBN
  )

  return (
    <div
      className={cn(
        `book grid h-full animate-fade grid-cols-1 grid-rows-[70%_100px] gap-2  animate-normal animate-duration-[400ms] animate-fill-forwards animate-once animate-ease-linear `
      )}
    >
      <div
        className='relative '
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <img
          src={bookData.cover}
          className='h-full min-w-full rounded object-fill object-center shadow-lg '
          alt='asdsad'
          style={{
            filter: 'drop-shadow(-2px 1px 2px #00000044)'
          }}
        />

        {
          <div
            className={cn(
              'absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 opacity-0 ',
              showOptions && ' opacity-100  transition-opacity duration-300 '
            )}
          >
            <span
              className='cursor-pointer text-white'
              onClick={() => addToReadingList(bookData)}
            >
              <Eye width={28} height={28} />
            </span>
          </div>
        }
      </div>

      <div>
        <Link href={`/book/${bookData.ISBN}`}>
          <a className='link'>
            <h1 className='font-medium text-[#2E2E2E] hover:underline'>
              {bookData.title}
            </h1>
          </a>
        </Link>

        <div className='flex items-center justify-between'>
          <h2 className='text-sm font-light'>{bookData.author.name}</h2>
        </div>

        {isReading && (
          <span className='mt-1 flex animate-fade-left items-center justify-start gap-1 text-sm text-[#EB4F6E] animate-delay-[56ms] animate-normal animate-duration-[400ms]'>
            <span className='flex h-4 w-4 items-center justify-center rounded-full bg-[#EB4F6E] text-white '>
              <Eye width={12} height={12} />
            </span>
            En la lista de lectura
          </span>
        )}
      </div>
    </div>
  )
}
