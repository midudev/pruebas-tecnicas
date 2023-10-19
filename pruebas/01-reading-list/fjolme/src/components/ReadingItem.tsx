import { Book } from '../types/types'
import { RemoveButton } from './RemoveButton'

interface Props {
  book: Book,
  removeFromReadingList: (book: Book) => void
}

export const ReadingItem = ({ book, removeFromReadingList }: Props) => {
  return (
    <article className='relative flex gap-2 rounded-md p-2 bg-neutral-900 transition duration-150 hover:bg-neutral-800'>
      <img
        className='object-cover rounded-md h-[72px]'
        alt={`Carátula del libro ${book.title}`}
        src={book.cover}
      />
      <div className='flex flex-col min-w-0 w-full'>
        <h2
          className='text-ellipsis overflow-hidden whitespace-nowrap font-semibold'
          title={book.title}>
          {book.title}
        </h2>
        <p
          className='text-ellipsis overflow-hidden whitespace-nowrap font-light text-neutral-400'
          title={book.author.name}>
          {book.author.name}
        </p>
        <p className='flex mt-2'>
          <span
            className='font-light text-xs flex-grow'>
            {book.genre}
          </span>
          <span
            className='font-light text-xs'>
            {book.pages} pág.
          </span>
        </p>
      </div>
      <RemoveButton
        book={book}
        size='2rem'
        removeFromReadingList={removeFromReadingList}
      />
  </article>
  )
}
