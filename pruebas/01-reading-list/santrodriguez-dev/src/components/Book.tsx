import { useRef } from 'react'
import { useReadingListStore } from '../store'
import { type Author } from '../types'

interface BookProps {
  title: string
  cover: string
  author: Author
  ISBN: string
  isReadListMode?: boolean
  isSelected?: boolean
}

export const Book: React.FC<BookProps> = ({ cover, ISBN, isReadListMode, title, isSelected }) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const addBook = useReadingListStore((state) => state.addBook)
  const removeBook = useReadingListStore((state) => state.removeBook)

  // console.log('render Book')
  const handleAddBook = () => {
    if (isReadListMode === true) {
      removeBook(ISBN)
      return
    }
    addBook(ISBN)

    // document.startViewTransition(() => {
    //   // imageRef.current.style.transform = 'scale(2)'
    //   imageRef.current.hidden = true

    //   addBook(ISBN)
    // })
  }
  return (
    <article
      className='grid items-center'
      onClick={handleAddBook}>
      {/* {title} */}
      <img
        className='w-full object-contain cursor-pointer my-image'
        src={cover} alt={title}
        ref={imageRef}
        style={{ viewTransitionName: `image-${ISBN}` }}
      // style={{ viewTransitionName: 'book-image' }}
      />
      <span>{isSelected === true ? 'selected' : ''}</span>
      {/* <span>{author.name}</span> */}
    </article>
  )
}
