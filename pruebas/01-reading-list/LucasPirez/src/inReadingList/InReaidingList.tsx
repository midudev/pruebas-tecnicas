import { Library } from '../getBooks'
import ReadingListCard from './ReadingListCard'
import { useBooksStore } from '../store/booksStore'
import { adapterBook } from '../adapter/adapterBook'
import DragAndDrop from '../dragAndDrop/DragDropContainer'

export default function InReadingList() {
  const inReadingState = useBooksStore((state) => state.inReadingList)

  const count = useBooksStore((state) => state.countState)

  return (
    <DragAndDrop
      container='inReading'
      className='flex flex-wrap gap-3 items-start justify-start max-w-[400px] shadow-lg shadow-zinc-600 p-3'
    >
      <h2 className='w-full text-xl bg-zinc-700 p-1'>
        Lista de lectura - {count.inReadingList}
      </h2>
      {!inReadingState?.length ? <p>Sin Libros</p> : ''}
      {inReadingState?.map((book: Library) => (
        <ReadingListCard book={adapterBook(book)} key={book.book.ISBN} />
      ))}
    </DragAndDrop>
  )
}
