import { Book } from '@/types/books'
import Image from 'next/image'

interface BookProps {
    book: Book
}

export default function Book({ book }: BookProps) {
  return (
    <article>
        <div className='w-full h-[350px]'>
            <Image className='w-full h-full object-cover' src={book.cover} alt={`libro ${book.title}`} width={200} height={300} />
        </div>
    </article>
  )
}
