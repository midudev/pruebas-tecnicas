import { Book } from '../interfaces/Book'
import ModalBookDetails from './ModalBookDetails'

interface CardBookProps {
  book: Book
  addToReadingList?: (book: Book) => void
  fromComponent?: string
  addToBookList?: (book: Book) => void
}

const CardBook = ({
  book,
  addToReadingList,
  fromComponent = '',
  addToBookList,
}: CardBookProps) => {
  //
  const handleAddToReadingList = (book: Book) => {
    if (addToReadingList) {
      addToReadingList(book)
    }
  }

  const handleRemoveFromReadingList = (book: Book) => {
    if (addToBookList) {
      addToBookList(book)
    }
  }

  return (
    <div className='grid grid-cols-3'>
      <img src={book.cover} alt='' className='w-24' />
      <div className='col-span-2 m-2 pl-2'>
        <h3 className='text-sm font-serif text-gray-600'>{book.title}</h3>
        <p className='text-xs font-light pt-1 text-gray-500'>
          - {book.author.name}
        </p>
        <p className='text-xs font-extralight pt-2 text-gray-500'>
          ({book.genre})
        </p>
        {fromComponent === 'Books' && (
          <button
            type='button'
            className='btn btn-xs bg-orange-200 mt-2 ml-1 hover:bg-orange-300 mr-1'
            onClick={() => handleAddToReadingList(book)}
          >
            +
          </button>
        )}
        {fromComponent === 'ReadingList' && (
          <button
            type='button'
            className='btn btn-xs bg-orange-200 mt-2 ml-1 hover:bg-orange-300 mr-1'
            onClick={() => handleRemoveFromReadingList(book)}
          >
            -
          </button>
        )}
        <ModalBookDetails book={book} />
      </div>
    </div>
  )
}

export default CardBook
