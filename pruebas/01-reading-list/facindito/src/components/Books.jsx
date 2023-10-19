import { BookmarkIcon } from './icons'
import Modal from './Modal'
import { BookCard } from './BookCard'
import { useWishlistContext } from '../context/listBookContext'
import useModal from '../hooks/useModal'

export function Books ({ books }) {
  const { addToWishlist, removeToWishlist, checkBookInList } = useWishlistContext()
  const { selectedBook, showModal, handleOpen, handleClose } = useModal()

  const handleClick = (book, e) => {
    e.stopPropagation()
    checkBookInList({ currentBook: book })
      ? removeToWishlist(book)
      : addToWishlist(book)
  }

  return (
    <>
      <ul className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4'>
        {books?.map(({ book }) => (
          <li
            className='flex flex-col gap-4 cursor-pointer hover:scale-105'
            key={book.ISBN}
            onClick={() => handleOpen(book)}
          >
            <img
              className={`aspect-[2/3] object-fill
              ${(checkBookInList({ currentBook: book }))
                ? 'opacity-25'
                : 'opacity-100'
              }
            `}
              src={book.cover}
              alt={book.title}
            />
            <div className='text-sm flex items-start justify-between'>
              <div>
                <p className='font-bold'>{book.title}</p>
                <p className='opacity-50'>{book.author.name}</p>
              </div>
              <button onClick={(e) => handleClick(book, e)}>
                <BookmarkIcon
                  className={`w-6 h-6 
                    ${(checkBookInList({ currentBook: book }))
                      ? 'fill-yellow-300 stroke-yellow-300'
                      : 'fill-none hover:stroke-yellow-300'
                    }
                  `}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {
        showModal && (
          <Modal onClose={handleClose}>
            <BookCard
              book={selectedBook}
              handleClick={handleClick}
            />
          </Modal>

        )
      }
    </>
  )
}
