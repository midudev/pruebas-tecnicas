import type { Book } from '../types'
import BookCard from './BookCard'

interface Props {
  isShowingReadList: boolean
  readList: Book[] | null
}
export default function ReadingList({ isShowingReadList, readList }: Props) {
  const show = isShowingReadList
    ? '-translate-x-full'
    : 'translate-x-full invisible'

  return (
    <section
      id='readList'
      className={`fixed left-full h-full w-[32%] border-l-2 border-slate-500 ${show} fixed overflow-auto pb-24 duration-500 ease-in-out`}
    >
      <h2 className='w-full text-center text-2xl font-bold text-white'>
        List To Read
      </h2>
      <button>uwu</button>
      <ul className='grid grid-cols-auto-fit gap-5 px-2 py-5'>
        {readList?.map((book) => (
          <BookCard book={book} key={book.ISBN} action='RemoveFromReadingList' />
        ))}
      </ul>
    </section>
  )
}
