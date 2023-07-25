import { Book } from './Book'
import { type BookType } from '../types.d'

type Props = {
  books: BookType[],
  isDisplay: boolean
}

export function ReadingList ({ isDisplay = false, books = [] }: Props) {
  const displayClass = isDisplay ? '' : 'hidden'

  return (
    <div className={`${displayClass} w-80 ml-11`}>
      <aside className={`${displayClass} fixed top-0 right-0 w-80 h-screen animate-slide-in-fwd-right`}>
        <div className='h-full overflow-y-auto bg-gray-800 no-scrollbar'>
          <h2 className='fixed px-3 py-3 w-full h-16 bg-gray-800 font-bold text-2xl border-b-2 border-white text-white'>Mi Lista</h2>
          <ul className='flex flex-col items-center gap-16 mt-16 py-16 overflow-y-hidden'>
            {books.map((book) => (
              <li key={book.ISBN}>
                <Book book={book} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
