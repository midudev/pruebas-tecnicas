import { useFiltersContext } from '@/hooks/useFiltersContext'
import type { Book } from '@/types'
import Image from 'next/image'
import BookIcon from './Icons/BookIcon'

interface Props {
  books: Book[]
}

export default function BooksList({ books }: Props) {
  const { rangeFilter, selectFilter, addBookToReadingList, readingList, getIfBookisInReadingList } =
    useFiltersContext()

  const filteredBooks = books.filter((book) => {
    if (rangeFilter && rangeFilter > book.pages) {
      return false
    }

    if (selectFilter && selectFilter !== book.genre) {
      return false
    }

    return true
  })

  const handleClick = (book: Book) => () => {
    addBookToReadingList(book)
  }

  return (
    <ul className='grid grid-cols-3 gap-y-6'>
      {filteredBooks.map((book) => {
        const isBookInReadingList = getIfBookisInReadingList(book)
        return (
          <li key={book.ISBN} className='flex gap-2 w-fit group'>
            <Image
              className='rounded-lg h-auto '
              src={book.cover}
              alt={book.title}
              width={125}
              height={125}
            />
            {!isBookInReadingList && (
              <button
                onClick={handleClick(book)}
                className='hidden w-8 h-8 group-hover:block bg-orange-500 px-1 py-1 rounded-lg '
              >
                <BookIcon className='w-full h-full' />
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}
