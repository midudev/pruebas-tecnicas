import booksMocks from '../mocks/books.json'
import { BookInformation } from './BookInformation'

const booksList = booksMocks.library

export function BookList () {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {booksList.map((data, index) => {
        return (
            <BookInformation book={data.book} key={index}/>
        )
      })}
    </ul>
  )
}
