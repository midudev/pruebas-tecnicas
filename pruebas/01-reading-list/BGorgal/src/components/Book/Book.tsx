import { BookMapped } from '../../utils/mapLibrary'
import { twMerge } from 'tailwind-merge'
import ButtonAdd from '../Buttons/ButtonAdd'
import { motion } from 'framer-motion'
import { useBooksStore } from '../../store/books'

interface Props {
  book: BookMapped
  isReadList?: boolean
}

const variants = {
  imgReadList: 'lg:max-h-[25rem]',
}

const Book = ({ book, isReadList }: Props) => {
  const getBookInfo = useBooksStore(state => state.getBookInfo)
  const bookSelected = useBooksStore(state => state.bookSelected)
  const isModalOpen = useBooksStore(state => state.isModalOpen)



  const handleClick = () => {
    getBookInfo(book.bookId)
  }

  const noButtonAdd = book === bookSelected && isModalOpen

  return (
    <motion.article
      onClick={handleClick}
      className='relative sm:w-full '
      layoutId={book.bookId}
    >
     {!noButtonAdd && <ButtonAdd bookId={book.bookId} isReadList={isReadList} />}
      <img
        className={twMerge(
          'aspect-book w-full rounded-sm ',
          isReadList != null && variants.imgReadList,
        )}
        src={book.image}
        alt={book.title}
      />
    </motion.article>
  )
}

export default Book
