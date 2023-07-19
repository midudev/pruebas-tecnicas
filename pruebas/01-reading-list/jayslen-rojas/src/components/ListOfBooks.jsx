import { useContext } from 'react'
import { BookInformation } from './BookInformation'
import { BooksContext } from '../context/BooksContext'

export function BookList () {
  const { storage } = useContext(BooksContext)
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {storage.map((data, index) => {
        return (
            <BookInformation book={data.book} key={index}/>
        )
      })}
    </ul>
  )
}
