
import { useBookStore } from '../store/bookStore'
import { Book } from './Book'

export function ReadingList () {
  const { readingList } = useBookStore()

  const numReadingList = readingList.length
  return (
    <div className='bg-brown-1/50 p-4 rounded-xl'>
      <h2 className='mb-2 text-brown-1 font-medium'>Lista de lectura ({readingList.length})</h2>
      {
        numReadingList <= 0
          ? (
            <figure>
              <img className='opacity-50 rounded-xl max-w-xs w-full' src='/6719432.webp' alt='imagen lectura de libros' />
              <figcaption className='text-brown-1 text-center pt-4 '>Comienza a añadir libros</figcaption>
            </figure>
            )
          : (
            <div className='grid grid-cols-2 gap-3'>
              {
                readingList.map(book => (
                  <Book book={book} key={book.isbn} />
                ))
              }
            </div>
            )
      }
    </div>

  )
}
