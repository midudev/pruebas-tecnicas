import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import { useBoundStore } from '../../store/bound-store.ts'
import { CloseIcon } from '../Icons/Icons.tsx'
import componentClasses from './ListBook.module.css'

interface ListBookProps {
  title: string
  cover: string
  ISBN: string
}

export function ListBook ({ title, cover, ISBN }: ListBookProps) {
  const removeBookFromList = useBoundStore(state => state.removeBookFromList)
  const readingList = useBoundStore(state => state.booksInList)

  const createHandleOnClick = (ISBN: string) => () => {
    const isBookInList = readingList.some(book => book.ISBN === ISBN)
    if (isBookInList) {
      removeBookFromList(ISBN)
    }
  }

  return (
          <div
            className={componentClasses.bookCardContainer}
          >
            <button
              title='Remover libro'
              aria-label={ARIA_LABELS.RemoveBookFromList}
              onClick={createHandleOnClick(ISBN)}
              className={componentClasses.listBookRemoveButton}
            >
              <CloseIcon />
            </button>
            <div className={componentClasses.bookCoverContainer}>
            <img
              src={cover}
              alt={title}
              className={componentClasses.bookCover}
              aria-label={ARIA_LABELS.BookCover}
            />
            </div>
            <h3
              className={componentClasses.bookTitle}
              aria-label={ARIA_LABELS.BookTitle}
            >
              {title}
            </h3>
          </div>
  )
}
