'use client'
import books from '../../../books.json'
import { useState } from 'react'
import { BookIcon } from './assets/icons'
import BookCard from './components/BookCard'
import ReadingList from './components/ReadingList'
import type { Book } from './types'
export default function Home() {
  const { library } = books
  const [isShowingReadList, setIsShowingReadList] = useState<boolean>(true)
  const [readList, setReadList] = useState<Book[]>([])
  return (
    <>
      <header className='fixed top-0 flex h-16  w-screen items-center bg-[#596886] bg-brandImage bg-contain bg-no-repeat px-10 sm:bg-center'>
        <button
          onClick={() => setIsShowingReadList((prev) => !prev)}
          className={`flex gap-3 justify-self-end rounded-lg border-2 border-slate-800 bg-white p-2 text-black  ${
            isShowingReadList ? 'bg-opacity-100' : 'bg-opacity-60'
          } absolute right-14 transition-colors duration-300 ease-linear`}
        >
          <BookIcon />
          <span className='hidden font-bold sm:block'>Reading List</span>
        </button>
      </header>
      <main
        className={` ${
          isShowingReadList ? 'w-4/6' : 'w-full'
        } mb-10 mt-24 flex gap-5 overflow-x-hidden px-10 transition-all delay-100 duration-300 ease-out `}
      >
        <ul className='grid w-full grid-cols-auto-fit gap-5'>
          {library.map(({ book }) => (
            <BookCard key={book.title} book={book} setReadList={setReadList} />
          ))}
        </ul>
        <ReadingList
          isShowingReadList={isShowingReadList}
          readList={readList}
        />
      </main>
    </>
  )
}
