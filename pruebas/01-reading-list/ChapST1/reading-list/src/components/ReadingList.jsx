import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { ReadingListBooks } from './ReadingListBooks'

export function ReadingList () {
  const { readingList } = useBookZustandStore()

  return (
    <>
      <div className='  grid grid-cols-4 gap-4 bg-[#111111] border border-[#8f8f8f] p-5 rounded-md'>
        {
        readingList.map((book) => {
          return (
            <ReadingListBooks key={book.id} book={book} />
          )
        })
      }
      </div>
    </>
  )
}
