import { ARIA_LABELS } from '../../constants/aria-labels'
import { AVAILABLE_BOOKS_LIST_HEADER_ID } from '../../constants/element-attributes'
import { GenreFilter } from '../GenreFilter/GenreFilter'
import { PagesFilter } from '../PagesFilter/PagesFilter'
import { SearchBooks } from '../SearchBooks/SearchBooks'
import componentClasses from './AvailableBooksListHeader.module.css'

export function AvailableBooksListHeader () {
  return (
    <header
      aria-label={ARIA_LABELS.AvailableBooksHeader}
      className={componentClasses.availableBooksHeader}
      id={AVAILABLE_BOOKS_LIST_HEADER_ID}
    >
      <search
        aria-label={ARIA_LABELS.SearchFilters}
        className={componentClasses.booksFilters }
      >
        <SearchBooks />
        <PagesFilter />
        <GenreFilter />
      </search>
    </header>
  )
}
