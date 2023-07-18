'use client'

import { Book } from './Book'
import { useBooksContext } from '@/context/books.context'

export function Aside() {
  const { lectureBooks } = useBooksContext()

  return (
    <aside className="flex flex-col col-span-4 gap-4 text-center">
      <h2 className="text-xl font-bold uppercase ">Lista de lectura</h2>

      <h3 className="text-lg">
        <span className="text-[#FCD34D] font-bold ">{lectureBooks.length}</span> libros de lectura
      </h3>

      <div className="w-4/5 mx-auto text-left">
        {lectureBooks.map(({ book }, index) => {
          return (
            <div key={book.ISBN} className="relative">
              <div className="absolute left-0" style={{ top: `${index * 200}px` }}>
                <Book book={book} />
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
