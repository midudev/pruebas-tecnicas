'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useBooksContext } from '@/context/books.context'
import { Book } from './Book'

export function Books() {
  const { books } = useBooksContext()
  const [parent] = useAutoAnimate()
  return (
    <section
      ref={parent}
      className="grid auto-rows-max col-span-8 gap-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 h-fit"
    >
      {books.map(({ book }) => {
        return <Book book={book} key={book.ISBN} />
      })}
    </section>
  )
}
