import AvailableBook from './AvailableBook'
import { useReadListStore } from '../stores/BookStore'

export default function AvailableBooksSection ({ books }) {
  const { readList } = useReadListStore()

  return (
    <ul className='w-full sm:max-w-2xl md:max-w-5xl h-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center px-2 md:px-3'>
      {books && books.map(({ book }) => (
        // Si el libro no esta en la lista de lectura se renderiza en la lista de los disponibles
        !readList.some((instance) => instance.ISBN === book.ISBN) &&
          <li key={book.ISBN}>
            <AvailableBook book={book} />
          </li>
      ))}
    </ul>
  )
}