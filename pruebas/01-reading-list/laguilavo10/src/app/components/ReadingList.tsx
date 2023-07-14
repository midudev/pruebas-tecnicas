'use client'
import Image from 'next/image'
import type { Book } from '../types'
import { useState } from 'react'

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
        List To Read{' '}
      </h2>
      <button>uwu</button>
      <ul className='grid grid-cols-auto-fit gap-y-3 p-2'>

        {readList?.map((book) => (
          <Image
            key={book.title}
            src={book.cover}
            alt={book.title}
            width={200}
            height={300}
            className='m-auto h-44 w-36'
          />
        ))}
      </ul>
    </section>
  )
}
