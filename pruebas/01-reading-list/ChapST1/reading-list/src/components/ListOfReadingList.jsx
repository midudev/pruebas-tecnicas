import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { ReadingListItem } from './ReadingListItem'

export function ListOfReadingList () {
  const { readingList } = useZustandBookStore()
  const readingListLength = readingList.length

  return (
    <section className='border-4 border-[#f9fafb] rounded-md py-4 px-7'>
      <h3 className='text-center text-2xl pb-3 text-[#666]'>Lista de lectura</h3>

      {
        readingListLength === 0 && <p className='text-center text-1xl py-3 text-[#717171]'>No hay libros en la lista de lectura 🥲</p>
      }

      <section className='grid grid-cols-4 gap-2 '>
        {
          readingList.map((book) => {
            return (
              <ReadingListItem key={book.id} book={book} />
            )
          })
        }
      </section>
    </section>
  )
}
