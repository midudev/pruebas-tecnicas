import { useState } from 'react'
import { Book } from '../interfaces/Book'

interface ModalBookDetailsProps {
  book: Book
}

const ModalBookDetails = ({ book }: ModalBookDetailsProps) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <button
        className='btn btn-xs bg-gray-200 hover:bg-gray-300 shadow-sm lowercase font-light'
        onClick={openModal}
      >
        Details
      </button>

      {modalOpen && (
        <dialog id={book.ISBN} className='modal' open>
          <div className='modal-box shadow-lg'>
            <div className='grid grid-cols-3'>
              <figure className='col-span-1 ml-3'>
                <img src={book.cover} className='w-28' alt='Album' />
              </figure>
              <div className='col-span-2'>
                <div className='flex'>
                  <h2 className='text-gray-600 text-lg font-serif'>
                    {book.title}
                  </h2>
                  <span className='text-sm font-medium self-center pl-1 text-gray-500'>
                    {' - ' + book.author.name}
                  </span>
                </div>
                <p className='text-md font-light pt-1 text-gray-500'>
                  {book.synopsis}
                </p>
                <div className='flex justify-start mt-4'>
                  <div className='badge badge-ghost text-xs'>
                    <p className='text-gray-500'>{book.genre}</p>
                  </div>
                  <div className='badge badge-ghost text-xs ml-3'>
                    <p className='text-gray-500'>
                      {book.pages} <span className='font-semibold'>pages</span>
                    </p>
                  </div>
                  <div className='badge badge-ghost text-xs ml-3'>
                    <p className='text-gray-500'>
                      {book.year} <span className='font-semibold'>year</span>
                    </p>
                  </div>
                </div>
                <div className='flex justify-start mt-3'>
                  <div className='badge badge-ghost text-xs'>
                    <p className='text-gray-500'>
                      {book.ISBN} <span className='font-semibold'>ISBN</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-action'>
              <button className='btn btn-sm' onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default ModalBookDetails
