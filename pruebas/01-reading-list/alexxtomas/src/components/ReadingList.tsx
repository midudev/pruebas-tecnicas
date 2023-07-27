import { useFiltersContext } from '@/hooks/useFiltersContext'
import type { Book } from '@/types'
import Image from 'next/image'
import CloseIcon from './Icons/CloseIcon'

export default function ReadingList() {
  const { readingList, removeBookFromReadingList } = useFiltersContext()

  const handleClick = (book: Book) => () => {
    removeBookFromReadingList(book)
  }

  return (
    <>
      <header className='mb-4'>
        <h2 className='text-3xl'>Lista de lectura</h2>
      </header>
      <section>
        <ul className='grid grid-cols-2 gap-8 '>
          {readingList.map((book) => {
            return (
              <li key={book.ISBN} className='relative'>
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={125}
                  height={125}
                  className='w-auto h-auto'
                />
                <button
                  onClick={handleClick(book)}
                  className='w-4 h-4  bg-slate-100 absolute top-[-8px] right-[-8px] border border-black text-black rounded-sm'
                >
                  <CloseIcon className='w-full h-full' />
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
