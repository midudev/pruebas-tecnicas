'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Book } from './Book'
import { useBooksContext } from '@/context/books.context'

export function Aside() {
  const { lectureBooks } = useBooksContext()
  const [parent] = useAutoAnimate()

  return (
    <aside className="flex flex-col col-span-4 gap-4 text-center">
      <h2 className="text-xl font-bold uppercase ">Lista de lectura</h2>

      <h3 className="text-lg">
        <span className="text-[#FCD34D] font-bold ">{lectureBooks.length}</span> libros de lectura
      </h3>

      <div ref={parent} className="w-4/5 mx-auto text-left">
        {lectureBooks.map(({ book }, index) => {
          return (
            <div key={book.ISBN} style={{ marginTop: `${index === 0 ? 0 : -400}px` }}>
              <Book book={book} />
            </div>
          )
        })}
      </div>
    </aside>
  )
}
