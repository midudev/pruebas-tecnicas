import { useBooksStore } from '../../store/books'

import { motion } from 'framer-motion'

import { IconAdd, IconRemove } from '../Icons'

interface Props {
  bookId: string
  isReadList?: boolean
}

const ButtonAdd = ({ bookId, isReadList }: Props) => {
  const addRemoveBookToList = useBooksStore(state => state.addRemoveBookToList)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    addRemoveBookToList(bookId)
  }
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      className='absolute right-3 top-2  '
    >
      {isReadList != null ? <IconRemove /> : <IconAdd />}
    </motion.button>
  )
}

export default ButtonAdd
