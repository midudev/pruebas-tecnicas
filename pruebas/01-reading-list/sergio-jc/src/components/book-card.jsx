import { Bookmark, FilledBookmark } from '@components/icons'
import { useReadingList } from '@hooks/index'
import { useEffect, useState } from 'react'

export function BookCard ({ cover, title, author, bookId, isAdded }) {
  const { addBookToReadingList, removeBookToReadingList } = useReadingList()

  const [isAddedToReadingList, setIsAdded] = useState(() => isAdded)

  const handleChange = () => {
    setIsAdded((prevState) => !prevState)
  }

  const handleAdd = (bookId) => () => {
    addBookToReadingList({ bookId })
    handleChange()
  }

  const handleRemove = (bookId) => () => {
    removeBookToReadingList({ bookId })
    handleChange()
  }

  useEffect(() => { setIsAdded(isAdded) }, [isAdded])
  return (
    <article role='article' aria-label='book card' className='rounded-xl overflow-hidden bg-white shadow-sm aspect-[6/11]'>
      <div className='aspect-[2/3] bg-gray-200 w-full overflow-hidden'>
        <img src={cover} alt={title} className='w-full h-full object-cover' />
      </div>
      <footer className='p-4 flex justify-between'>
        <div className='w-5/6'>
          <h4 className='truncate font-semibold text-2xl md:text-xl lg:text-lg'>
            {title}
          </h4>
          <h5 className='truncate text-xl md:text-lg lg:text-base'>{author}</h5>
        </div>
        <div className='pt-1'>
          {isAddedToReadingList
            ? (
              <button
                aria-label='remove to reading list'
                onClick={handleRemove(bookId)}
                className='p-0'
              >
                <FilledBookmark />
              </button>
              )
            : (
              <button
                aria-label='add to reading list'
                onClick={handleAdd(bookId)}
                className='p-0'
              >
                <Bookmark />
              </button>
              )}
        </div>
      </footer>
    </article>
  )
}
