import { BooksIcon } from '../Icons/Icons.tsx'
import { TEXT_CONTENT } from '../../constants/DOM-text.ts'
import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import componentClasses from './PageLogo.module.css'

export function PageLogo () {
  return (
        <div
            className={componentClasses.pageLogo}
            aria-label={ARIA_LABELS.PageLogo}
        >
            <a
                href="/"
                className={componentClasses.pageLogoHeading}
                aria-label={ARIA_LABELS.GoToHomePage}
            >
                <BooksIcon />
                <h1
                    aria-label={ARIA_LABELS.PageTitle}
                >
                    {TEXT_CONTENT.PageTitle}
                </h1>
            </a>
        </div>
  )
}
