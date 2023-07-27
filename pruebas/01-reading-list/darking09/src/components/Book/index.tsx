import Image from 'next/image'
import { BookProps } from '@typesFiles/props/book'
import useBooks from './useBooks'

export default function Book({
  book,
}: BookProps) {
  const { setLoading, classNameString } = useBooks(

  )
  return (
    <div className='relative pb-3/2'>
      <Image
        src={book.cover}
        alt={book.title}
        fill
        className={`object-cover rounded-lg ${classNameString}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}
