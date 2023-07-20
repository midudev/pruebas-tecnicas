import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { useBooks } from '../hooks/useBooks'
import { Books } from './Books'
import { Error } from './Error'
import { Loading } from './Loading'

export function ListOfBooks () {
  const { books, genderFilter } = useBookZustandStore()
  const { loading, error } = useBooks()

  if (loading) return <Loading />

  if (error) return <Error />

  return (
    <>
      {
        books.length === 0 && <p className='text-2xl text-center text-[#ededea]'>No hay libros para la categoria: <strong>{genderFilter}</strong></p>
      }

      <div className='w-full grid grid-cols-5 gap-5 pb-10 '>
        {
          books?.map((book) => {
            return <Books key={book.id} book={book} />
          })
        }
      </div>
    </>
  )
}
