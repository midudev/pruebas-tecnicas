import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import { BooksCount } from '../BooksCount/BooksCount.tsx'
import { PageLogo } from '../PageLogo/PageLogo.tsx'
import { ReadingListButton } from '../ReadingListButton/ReadingListButton.tsx'
import componentClasses from './PageHeader.module.css'

export function PageHeader () {
  return (
        <header
          className={componentClasses.pageHeader}
          aria-label={ARIA_LABELS.PageHeader}
        >
            <PageLogo />
            <BooksCount />
            <ReadingListButton/>
        </header>
  )
}
