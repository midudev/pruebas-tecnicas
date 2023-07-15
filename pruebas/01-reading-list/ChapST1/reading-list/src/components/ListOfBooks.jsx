import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { useBooks } from '../hooks/useBooks'
import { Books } from './Books'

export function ListOfBooks () {
  useBooks()
  const { books } = useBookZustandStore()

  return (
    <>
      <div className='grid grid-cols-5 gap-3 pb-10 '>
        {
        books?.map(({ book }) => {
          return <Books key={book.ISBN} book={book} />
        })
      }
      </div>
    </>
  )
}
