import { twMerge } from 'tailwind-merge'
import { useBooksStore } from '../../store/books'
import { BookMapped } from '../../utils/mapLibrary'
import { AnimatePresence, motion } from 'framer-motion'
import Book from './Book'

interface Props {
  books: BookMapped[]
  isReadList?: boolean
}

const variants = {
  normalList: ' grid w-[80%] align-center sm:w-full grid-cols-bookXl gap-9',
  readList: ' w-full pt-4  ',
  bookRead: 'h-8 px-2 ',
}

const variantsHover = {
  readlist: { y: -20 },
  list: { scale: 1.02 },
}

const BookList = ({ books, isReadList }: Props) => {
  const toggleModal = useBooksStore(state => state.toggleModal)

  const handleClick = () => {
    !isReadList && toggleModal()
  }

  return (
    <ul
      className={`${
        isReadList != null ? variants.readList : variants.normalList
      }`}
    >
      <AnimatePresence>
        {books.map((book, index) => (
          <motion.li
            onClick={handleClick}
            variants={variantsHover}
            whileHover={
              isReadList != null && index !== books.length - 1
                ? 'readlist'
                : 'list'
            }
            className={twMerge(
              ' cursor-pointer  ',
              isReadList != null && variants.bookRead,
            )}
            key={book.bookId}
          >
            <Book book={book} isReadList={isReadList} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default BookList
