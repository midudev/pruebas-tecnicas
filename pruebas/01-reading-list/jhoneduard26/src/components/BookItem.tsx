import { useReadListStore } from '../store'
import { type Book } from '../types'
import { toast } from 'react-hot-toast'

interface Props {
  book: Book
}

const isAddedBook = (books: Book[], isbn: string) => {
  return books.some(book => book.ISBN === isbn)
}

export const BookItem = ({ book }: Props) => {
  const { addBook, booksForRead } = useReadListStore(state => state)

  const isAdded = isAddedBook(booksForRead, book.ISBN)

  const onAddBook = () => {
    addBook(book)
    toast.success('Libro agregado a la lista de lectura', {
      position: 'bottom-right'
    })
  }

  return (
    <>
      <button
        className="w-full rounded px-4 py-2 bg-accent font-semibold text-lg hover:bg-highlight disabled:bg-gray-200 disabled:text-gray-400"
        type="button"
        disabled={isAdded}
        onClick={onAddBook}
      >
        {isAdded ? 'Agregado' : 'Agregar'}
      </button>
    </>
  )
}
