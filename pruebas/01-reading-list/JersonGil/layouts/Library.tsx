"use client"
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import useBookStore from "@/store/booksStore"
import BookSelected from '@/components/BookSelected'
import { Book } from '@/interfaces/books'

const BookCard = dynamic(() => import('@/components/BookCard'), {
  ssr: false,
})

const Library = () => {
  const { library, getBooks } = useBookStore()
  const [bookSelected, setBookSelected] = useState<Book>()

  useEffect(() => {
    getBooks()
  }, [getBooks])

  return (
    <article className={`${bookSelected && "flex flex-row w-full"} gap-4`}>
      <BookCard library={library} getBook={setBookSelected} />
      <BookSelected bookSelected={bookSelected} />
    </article>
  )
}

export default Library