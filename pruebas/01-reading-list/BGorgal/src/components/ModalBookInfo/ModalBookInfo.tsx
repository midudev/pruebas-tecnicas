import { useBooksStore } from '../../store/books'
import Book from '../Book/Book'
import { motion } from 'framer-motion'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: {
    opacity: 0,
    x: -100,
  },
}

const ModalBookInfo = () => {
  const bookSelected = useBooksStore(state => state.bookSelected)
  const toggleModal = useBooksStore(state => state.toggleModal)

  return (
    <motion.div
      onClick={toggleModal}
      className=' fixed inset-0 z-50 bg-slate-900 bg-opacity-50 grid max-h-full w-full place-content-center drop-shadow-2xl'
    >
      <div className='flex flex-col  items-center rounded-lg border border-gray-200 bg-white  dark:border-gray-600 dark:bg-gray-800  md:max-w-xl md:flex-row'>
        <div className='z-50 m-4  [&>article>img]:h-[18rem] [&>article]:w-[12rem]  '>
          {bookSelected != null ? (
            <Book book={bookSelected} />
          ) : (
            <p className='font-primary text-lg text-slate-100'>
              No hay libros seleccionado
            </p>
          )}
        </div>
        <motion.div
          transition={{
            duration: 0.5,
          }}
          initial='closed'
          animate='open'
          exit='closed'
          variants={variants}
          className='z-10 mx-5 flex flex-col justify-between p-1 leading-normal'
        >
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {bookSelected?.title}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {bookSelected?.synopsis}
          </p>
          <p className='mb-3 font-normal text-gray-800 dark:text-gray-500'>
            {bookSelected?.authorName}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ModalBookInfo
