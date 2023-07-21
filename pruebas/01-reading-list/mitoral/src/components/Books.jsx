import booksData from '../../../books.json'
import { Book } from './Book'

export function Books () {
  console.log(booksData)
  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5'>
        {
            booksData.library.map((book, index) => {
              return <Book key={index} />
            })
        }
      </div>
    </>
  )
}
