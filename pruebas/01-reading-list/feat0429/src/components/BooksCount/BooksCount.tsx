import { useBooks } from '../../hooks/useBooks.ts'
import componentClasses from './BooksCount.module.css'
import { TEXT_CONTENT } from '../../constants/DOM-text.ts'
import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import { useFilters } from '../../hooks/useFilters.ts'
import { Genre } from '../../constants/genres.ts'
import { animated } from '@react-spring/web'
import { useBooksByGenreCount } from '../../hooks/useBooksByGenreCount.ts'

export function BooksCount () {
  const { availableBooksCount, areBooksLoading } = useBooks()
  const { genreFilter } = useFilters()

  const { countTransition, isGenreAll, genreDisplayed, genreCountDisplayed, currentAvailableBooksByGenreCount } = useBooksByGenreCount()

  return (
          <>
            {
              availableBooksCount > 0 && !areBooksLoading &&
              <div className={componentClasses.countersContainer}>
                <h2
                  className={componentClasses.availableBooksHeading}
                  aria-label={ARIA_LABELS.AvailableBooksCount}
                >
                  {`${TEXT_CONTENT.AvailableBooksTitle}: ${Genre.All} (${availableBooksCount})`}
                </h2>

                {
                  countTransition((style, isCounterShown) => (
                    isCounterShown &&
                    <animated.h2
                      style={style}
                      className={componentClasses.availableBooksHeading}
                      aria-label={ARIA_LABELS.AvailableBooksCount}
                    >
                      {`${isGenreAll ? genreDisplayed.current : genreFilter} (${isGenreAll ? genreCountDisplayed.current : currentAvailableBooksByGenreCount})`}
                    </animated.h2>
                  ))

                }
              </div>

            }
          </>

  )
}
