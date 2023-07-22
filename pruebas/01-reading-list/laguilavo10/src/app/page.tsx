'use client'
import { useState } from 'react'
import ReadingList from './components/ReadingList'
import Filters from './components/Filters'
import BookList from './components/BookList'
import Header from './components/Header'

export default function Home() {
  const [isShowingReadList, setIsShowingReadList] = useState<boolean>(true)

  return (
    <>
      <Header isShowingReadList={isShowingReadList} setIsShowingReadList={setIsShowingReadList} />
      <main className='mt-24 '>
        <Filters />
        <div
          className={` ${
            isShowingReadList ? 'grid-cols-[70%_30%]' : 'grid-cols-[100%_0%]'
          } z-10 mb-10 grid overflow-x-hidden px-10 transition-all delay-100 duration-300 ease-out`}
        >
          <BookList />
          <ReadingList isShowingReadList={isShowingReadList} />
        </div>
      </main>
    </>
  )
}
