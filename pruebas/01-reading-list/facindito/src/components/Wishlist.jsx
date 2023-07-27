import { useWishlistContext } from '../context/listBookContext'
import useModal from '../hooks/useModal'
import { BookCard } from './BookCard'
import { BookmarkSlash } from './icons'
import Modal from './Modal'

export function Wishlist ({ wishlist }) {
  const { removeToWishlist, checkBookInList } = useWishlistContext()
  const { handleClose, handleOpen, showModal, selectedBook } = useModal()

  const handleClick = (book, e) => {
    e.stopPropagation()
    if (checkBookInList({ currentBook: book })) {
      removeToWishlist(book)
    }
  }
  return (
    <>
      <ul className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4'>
        {
        wishlist?.map(({ book }) => {
          const { ISBN, cover, title, author } = book
          return (
            <li
              className='flex flex-col gap-4'
              key={ISBN}
              onClick={() => handleOpen(book)}
            >
              <img
                className='aspect-[2/3] object-fill'
                src={cover}
                alt={title}
              />
              <div className='text-sm flex items-start justify-between'>
                <div className=''>
                  <p className='font-bold'>{title}</p>
                  <p className='opacity-50'>{author.name}</p>
                </div>
                <button onClick={(e) => handleClick(book, e)}>
                  <BookmarkSlash
                    className='w-6 h-6 hover:stroke-red-500 fill-red-500'
                  />
                </button>
              </div>
            </li>
          )
        })
      }
      </ul>
      {
        showModal && checkBookInList({ currentBook: selectedBook }) && (
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
