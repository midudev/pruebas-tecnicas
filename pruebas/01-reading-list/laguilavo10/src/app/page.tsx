'use client'
import { useState } from 'react'
import ReadingList from './components/ReadingList'
import Filters from './components/Filters'
import BookList from './components/BookList'
import Header from './components/Header'

export default function Home() {
  const [isShowingReadList, setIsShowingReadList] = useState<boolean>(true)
  const styles = isShowingReadList
    ? 'md:grid-cols-[70%_30%] [&>section:first-child]:hidden md:[&>section:first-child]:grid'
    : 'md:grid-cols-[100%_0%] [&>section:last-child]:hidden md:[&>section:last-child]:grid'
  return (
    <>
      <Header
        isShowingReadList={isShowingReadList}
        setIsShowingReadList={setIsShowingReadList}
      />
      <main className='mt-24 '>
        <Filters />
        <div
          className={`${styles} z-10 mx-5 mb-10 grid transition-all delay-100 duration-300 ease-out first:hidden`}
        >
          <BookList isShowingReadList={isShowingReadList} />
          <ReadingList isShowingReadList={isShowingReadList} />
        </div>
      </main>
    </>
  )
}
