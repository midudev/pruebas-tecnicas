import { useBookUser } from '../store/bookStoreUser'
import ItemBook from './item-book'
import useFreeBook from '../hooks/useFreeBook'

function Books (): JSX.Element {
  const { addBookUser } = useBookUser()
  const { freeBook } = useFreeBook()

  return (
    <>
      <div role='grid' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 2xl:px-0'>
        {freeBook.map(({ book }) => (
          <ItemBook key={book.ISBN} book={book} addBookUser={addBookUser} />
        ))}
      </div>
      {freeBook.length === 0
        ? (
          <div className='w-full h-[calc(100vh-128px)] grid place-content-center'>
            <span className='text-2xl font-medium tracking-tight'>No hay libros</span>
          </div>
          )
        : null}
    </>
  )
}

export default Books
