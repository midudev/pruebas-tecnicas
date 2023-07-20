"use client"
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import useBookStore from "@/store/booksStore"
import BookSelected from '@/components/BookSelected'

const BookCard = dynamic(() => import('@/components/BookCard'), {
  ssr: false,
})

const Library = () => {
  const { library, getBooks, bookSelected } = useBookStore()

  useEffect(() => {
    getBooks()
  }, [getBooks])

  return (
    <article className={`${bookSelected && "flex flex-row w-full"} gap-4`}>
      <BookCard library={library} />
      <BookSelected />
    </article>
  )
}

export default Library