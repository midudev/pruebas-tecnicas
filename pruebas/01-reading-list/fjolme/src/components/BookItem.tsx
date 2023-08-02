import { Book } from '../types/types'
import { AddButton } from './AddButton'
import { RemoveButton } from './RemoveButton'

interface Props {
  book: Book,
  inReadingList: boolean,
  addToReadingList: (book: Book) => void,
  removeFromReadingList: (book: Book) => void
}

export const BookItem = ({ book, inReadingList, addToReadingList, removeFromReadingList }: Props) => {
  return (
    <article className={`relative flex flex-col rounded-md p-4 transition duration-150
      ${inReadingList
        ? 'bg-transparent hover:bg-transparent [&>:not(button)]:grayscale [&>:not(button)]:blur-[1px]'
        : 'bg-neutral-900 hover:bg-neutral-800'}`}
    >
      <h3 className='flex-grow'>
        <img
          className='object-cover w-[100%] rounded-md'
          alt={`Carátula del libro ${book.title}`}
          src={book.cover}
        />
      </h3>
      <h2
        className='text-ellipsis overflow-hidden whitespace-nowrap font-semibold mt-2'
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
      {inReadingList
        ? <RemoveButton
            book={book}
            removeFromReadingList={removeFromReadingList}
          />
        : <AddButton
            book={book}
            addToReadingList={addToReadingList}
          />
      }
  </article>
  )
}
