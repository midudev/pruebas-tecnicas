import { useContext } from 'react'
import { BookInformation } from './BookInformation'
import { BooksContext } from '../context/BooksContext'

export function BookList () {
  const { books } = useContext(BooksContext)
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] place-content-center gap-4 sm:grid-cols-[repeat(auto-fit,minmax(200px,0.25fr))] lg:place-content-start">
      {books.map((data, index) => {
        return (
            <BookInformation book={data} key={index}/>
        )
      })}
    </ul>
  )
}
