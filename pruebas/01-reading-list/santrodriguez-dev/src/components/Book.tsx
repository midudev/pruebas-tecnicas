import { memo, useRef } from 'react'
import { useReadingListStore } from '../store'
import { type Author } from '../types'
import { IconRemove } from './Icons/IconRemove'

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

  const handleAddBook = () => {
    const handleBook = isReadListMode ? removeBook : addBook

    // @ts-expect-error startViewTransition is not supported by all browsers
    if (!document.startViewTransition) {
      handleBook(ISBN)
      return
    }
    // @ts-expect-error startViewTransition is not supported by all browsers
    document.startViewTransition(() => {
      handleBook(ISBN)
    })
  }
  return (
    <article className='grid items-center relative' >

      {isReadListMode &&
        <div className="flex justify-end">
          <IconRemove handleClickIcon={handleAddBook} />
        </div>
      }

      <img
        onClick={() => { !isReadListMode && handleAddBook() }}
        className={`w-full object-contain my-image ${!isReadListMode ? 'cursor-pointer' : ''}`}
        src={cover} alt={`${title} - ${synopsis}`}
        ref={imageRef}
        style={{ viewTransitionName: `book-${ISBN}` }}
      />

      {!isReadListMode && <h5 className="text-xl font-bold dark:text-white line-clamp-2">{title}</h5>}

    </article>

  )
})
