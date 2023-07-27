'use client'
import { BooksAvailableProps } from '@typesFiles/props/booksAvailable'
import { useBooksAvailable } from './useBooksAvailable'

export default function BooksAvailable ({ numberOfBooks } : BooksAvailableProps) {
  const { textForBooks, textForReadingList } = useBooksAvailable(numberOfBooks);

  return (
    <div className="grid grid-rows-2 pt-2">
      <h1 className='row-span-1 text-4xl'>{textForBooks}</h1>
      <h2 className='text-2xl'>{textForReadingList}</h2>
    </div>
  )
}
