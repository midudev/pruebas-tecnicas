'use client'

import { useBooksContext } from '@/context/books.context'
import { Book } from './Book'

export function Books() {
  const { books } = useBooksContext()
  return (
    <section className="grid col-span-8 gap-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {books.map(({ book }) => {
        return <Book book={book} key={book.ISBN} />
      })}
    </section>
  )
}
