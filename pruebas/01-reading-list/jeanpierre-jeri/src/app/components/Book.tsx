'use client'

import { useBooksContext } from '@/context/books.context'
import { BookInfo } from '@/types'
import Image from 'next/image'

export function Book({ book }: { book: BookInfo }) {
  const { setLectureBook } = useBooksContext()

  const handleSetLectureBook = () => {
    setLectureBook(book)
  }

  return (
    <article
      onClick={handleSetLectureBook}
      className="
      flex flex-col 
      p-6 bg-white 
      shadow-lg shadow-black 
      cursor-pointer rounded-2xl 
      hover:scale-105 transition-transform"
    >
      <header>
        <Image
          src={book.cover}
          alt={book.title}
          width={246}
          height={357}
          className="object-cover w-full aspect-[246/357] rounded-xl"
          priority
        />
      </header>
      <div className="flex flex-col flex-1">
        <h3 className="mt-4 text-xl text-black/[.87]">{book.title}</h3>
        <p className="mt-2 mb-4 text-base text-black/60">{book.synopsis}</p>

        <div className="mt-auto text-sm font-medium text-black/50">
          <h4>
            Autor: <strong> {book.author.name}</strong>
          </h4>
          <h5>Año: {book.year}</h5>
        </div>
      </div>
    </article>
  )
}
