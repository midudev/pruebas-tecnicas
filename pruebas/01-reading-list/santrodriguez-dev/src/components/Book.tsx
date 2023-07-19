import { memo, useRef } from 'react'
import { useReadingListStore } from '../store'
import { type Author } from '../types'

interface BookProps {
  title: string
  cover: string
  author: Author
  ISBN: string
  synopsis: string
  isReadListMode?: boolean
  isSelected?: boolean
}

// eslint-disable-next-line react/display-name
export const Book: React.FC<BookProps> = memo(({ cover, ISBN, isReadListMode, title, synopsis }) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const addBook = useReadingListStore((state) => state.addBook)
  const removeBook = useReadingListStore((state) => state.removeBook)

  console.log('render Book', { title })
  const handleAddBook = () => {
    const handleBook = isReadListMode ? removeBook : addBook

    if (!document.startViewTransition) {
      handleBook(ISBN)
      return
    }
    document.startViewTransition(() => {
      handleBook(ISBN)
    })
  }
  return (
    <article
      className='grid items-center'
      onClick={handleAddBook}>
      {/* {title} */}
      <img
        className='w-full object-contain cursor-pointer my-image'
        src={cover} alt={`${title} - ${synopsis}`}
        ref={imageRef}
        style={{ viewTransitionName: `book-${ISBN}` }}
      />

      {!isReadListMode && <h5 className="text-xl font-bold dark:text-white line-clamp-2">{title}</h5>}

    </article>

  )
})
