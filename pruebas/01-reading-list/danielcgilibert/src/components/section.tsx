//COMPONENTS
import Book from './book'

//TYPES
import { IBook } from '../types/book'

type Props = {
  title: string
  books: IBook[]
  totalBooks: number
}

export default function SectionLibrary({ title, books, totalBooks }: Props) {
  return (
    <section className='flex flex-col gap-4 '>
      <header className='flex justify-between'>
        <h1 className='font-display w-full  border-b-2 border-neutral-100 py-2    text-3xl tracking-wide  text-orange-400 first-letter:uppercase '>
          {title}
        </h1>
        <span className='h-fit rounded-full bg-orange-500 px-2 py-[1px] text-white'>
          {totalBooks}
        </span>
      </header>

      <div className='grid grid-cols-listBooks  gap-x-10 gap-y-8  '>
        {books.map((book: IBook) => (
          <Book key={book.ISBN} bookData={book} />
        ))}
      </div>
    </section>
  )
}
