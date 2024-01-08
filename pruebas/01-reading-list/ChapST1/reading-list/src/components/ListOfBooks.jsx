import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { BookItem } from './BookItem'

export function ListOfBooks () {
  const { books, category } = useZustandBookStore()
  const booksLenght = books.length

  return (
    <section className='border-4 border-[#f9fafb] rounded-md py-4 px-7'>
      <h3 className='text-center text-2xl pb-3 text-[#666]'>Libros</h3>
      {
        booksLenght === 0 && <p className='text-center text-1xl py-3 text-[#717171]'>No hay mas libros de la categoria: <strong>{category}</strong>  🥲</p>
      }
      <section className='m-auto grid grid-cols-4 gap-2'>
        {
        books.map((book) => {
          return (
            <BookItem key={book.id} book={book} />
          )
        })
      }
      </section>

    </section>

  )
}
