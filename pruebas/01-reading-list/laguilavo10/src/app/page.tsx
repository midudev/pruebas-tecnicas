'use client'
import Image from 'next/image'
import books from '../../../books.json'
import { useState } from 'react'
export default function Home() {
  const { library } = books
  const [isShowReadingList, setIsShowReadingList] = useState<boolean>(true)
  return (
    <>
      <header>
        <button onClick={() => setIsShowReadingList((prev) => !prev)}>
          Reading List
        </button>
      </header>
      <main
        className={` ${
          isShowReadingList ? 'w-4/6' : 'w-full'
        } flex transition-all delay-100 duration-300 ease-out overflow-x-hidden gap-5`}
      >
        <ul className='grid grid-cols-auto-fit w-full gap-5'>
          {library.map(({ book }) => (
            <li key={book.title}>
              <Image
                src={book.cover}
                alt={book.title}
                width={200}
                height={300}
                className='h-80 w-56 m-auto'
              />
            </li>
          ))}
        </ul>
        {/* <section className='relative w-1/3'> */}
        <div
          className={`w-[32%] h-full fixed bg-red-500 left-full ${
            isShowReadingList
              ? '-translate-x-full'
              : 'translate-x-full invisible'
          } duration-500 ease-in-out fixed`}
        >
          dasjdhas
        </div>
        {/* </section> */}
      </main>
    </>
  )
}
