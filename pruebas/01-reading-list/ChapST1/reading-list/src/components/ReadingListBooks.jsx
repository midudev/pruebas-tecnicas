import { ALL_CATEGORIES } from '../constants'
import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { DeleteIcon } from './icons'

export function ReadingListBooks ({ book }) {
  const { updateBooks, updateReadingList, books, readingList, genderFilter } = useBookZustandStore()
  const { id, bookTitle, bookCover } = book

  const handleClick = () => {
    const findBook = readingList?.find((book) => book.id === id)
    const newReadingList = readingList?.filter((book) => book.id !== id)

    const newBooks = [...books, findBook]

    if (genderFilter !== ALL_CATEGORIES) {
      const filterBooks = newBooks.filter((book) => book.bookGenre === genderFilter)

      updateBooks(filterBooks)
      updateReadingList(newReadingList)
      return
    }

    updateBooks(newBooks)
    updateReadingList(newReadingList)
  }

  return (
    <div className=' h-full flex  flex-col items-center gap-4 relative group overflow-hidden rounded-md'>
      <img src={bookCover} alt={bookTitle} className='w-full h-full object-cover duration-300 group-hover:blur-[2px] group-hover:scale-125' />
      <DeleteIcon className='fill-[#000000] stroke-[#333332] w-12 cursor-pointer absolute bottom-2 opacity-0 duration-300 group-hover:opacity-100' onClick={handleClick} />
    </div>
  )
}
