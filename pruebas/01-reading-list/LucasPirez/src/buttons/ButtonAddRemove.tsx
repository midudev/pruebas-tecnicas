import { Book } from '../getBooks'
import {
  deleteBookStorageReadingList,
  setStorageReadingList
} from '../localStorage/readingList'
import { useBooksStore } from '../store/booksStore'

interface Props {
  value: 'Add' | 'Remove'
  book: Book
  className?: string
}

export default function ButtonAddRemove({ value, book, className }: Props) {
  const { ISBN } = book

  const addInReading = useBooksStore((state) => state.addInReadingList)

  const removeInReading = useBooksStore((state) => state.removeInReadingList)

  const handleClick = () => {
    if (value === 'Add') {
      addInReading(book)
      setStorageReadingList(ISBN)
    } else {
      removeInReading(book)
      deleteBookStorageReadingList(ISBN)
    }
  }

  className = typeof className === 'undefined' ? '' : className

  const newClass = className + ' hover:scale-125 transition-all'

  return (
    <button onClick={handleClick} className={newClass}>
      {value === 'Add' ? 'Agregar' : 'Remover'}
    </button>
  )
}
