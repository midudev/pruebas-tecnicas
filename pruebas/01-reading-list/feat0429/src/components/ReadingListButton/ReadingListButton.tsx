import { BookMarkIcon } from '../Icons/Icons'
import { useBoundStore } from '../../store/bound-store.ts'
import { TEXT_CONTENT } from '../../constants/DOM-text.ts'
import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import componentClasses from './ReadingListButton.module.css'

export function ReadingListButton () {
  const displayReadingList = useBoundStore(state => state.displayReadingList)
  const readingList = useBoundStore(state => state.booksInList)

  const booksInListCount = readingList.length

  const handleOnClick = () => {
    displayReadingList()
  }

  return (
        <button
            title={TEXT_CONTENT.ListTitle}
            className={componentClasses.readingListButton}
            aria-label={ARIA_LABELS.ShowReadingList}
            onClick={handleOnClick}
        >
            <BookMarkIcon />
            <span>
                {TEXT_CONTENT.ListTitle}
                <br/>
                <strong
                    aria-label={ARIA_LABELS.ReadingListCount}
                >
                    {booksInListCount}
                </strong>
            </span>
        </button>
  )
}
