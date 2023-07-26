import BookCard from './BookCard'
import { Library } from '../getBooks'
import { adapterBook } from '../adapter/adapterBook'
import DragAndDropContainer from '../dragAndDrop/DragDropContainer'
import { isBookInStorage } from '../localStorage/readingList'
import { useFiltersStore } from '../store/filtersStore'
import { useBooksStore } from '../store/booksStore'

export default function Books() {
  const books = useFiltersStore((state) => state.booksFilters)

  const count = useBooksStore((state) => state.countState)

  return (
    <DragAndDropContainer
      container='outReading'
      className='flex flex-wrap justify-center max-w-[800px] gap-3 '
    >
      {!books.length ? (
        <h2 className=' bg-zinc-700 p-1 w-[400px]'>Sin Resultados</h2>
      ) : (
        <h2 className='w-full bg-zinc-700 p-1 '>
          Libros para agregar -{'  '}
          {books.length < count.outReadingList
            ? books.length
            : count.outReadingList}
        </h2>
      )}
      {books?.map((book: Library) => (
        <BookCard
          book={adapterBook(book)}
          key={book.book.ISBN + String(Math.random)}
          inReadingList={isBookInStorage(book.book.ISBN)}
        />
      ))}
    </DragAndDropContainer>
  )
}
