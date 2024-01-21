import { useBoundStore } from '../../store/bound-store.ts'
import { ListBook } from '../ListBook/ListBook.tsx'
import { animated } from '@react-spring/web'
import componentClasses from './ReadingList.module.css'
import { BooksResultsMessage } from '../BooksResults/BooksResultsMessage.tsx'
import { useReadingListBookTransition } from '../../hooks/useReadingListBookTransition.ts'
import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import { RESULT_MESSAGES } from '../../constants/DOM-text.ts'
import { useRef } from 'react'

export function ReadingList () {
  const listContainer = useRef<HTMLElement>(null)
  const hideReadingList = useBoundStore(state => state.hideReadingList)
  const { isReadingListMounted, isListDisplayed, transitions } = useReadingListBookTransition()
  const mountAnimationClassName = isReadingListMounted ? componentClasses.hideReadinglist : componentClasses.showReadingList

  const handleOnAnimationEnd = () => {
    if (!isReadingListMounted) hideReadingList()
  }

  return (
        <aside
          ref={listContainer}
          className={`${componentClasses.readingListBar} ${mountAnimationClassName}`}
          onAnimationEnd={handleOnAnimationEnd}
        >
            {
              isListDisplayed
                ? <ul
                    className={componentClasses.readingList}
                    aria-label={ARIA_LABELS.ReadingList}
                  >
                    {
                      transitions((style, book) => (
                        <animated.li
                          key={book.ISBN}
                          style={style}
                          className={componentClasses.bookListElement}
                        >
                          <ListBook
                            title={book.title}
                            cover={book.cover}
                            ISBN={book.ISBN}
                          />
                        </animated.li>
                      ))
                    }
                  </ul>
                : <div className={componentClasses.noBooksMessage}>
                    <BooksResultsMessage
                      message={RESULT_MESSAGES.NoBooksInList}
                      fontColor='#341b16'
                    />
                  </div>
            }
      </aside>
  )
}
