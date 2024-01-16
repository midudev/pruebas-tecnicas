import { useBooks } from '../../hooks/useBooks.ts'
import { roundPages } from '../../utils.ts'
import { PAGES_FILTER } from '../../constants/element-attributes.ts'
import componentClasses from './PagesFilter.module.css'
import { FIELD_LABELS, TEXT_CONTENT } from '../../constants/DOM-text.ts'
import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import { useFilters } from '../../hooks/useFilters.ts'
import { PAGES_FILTER_CONFIG } from '../../constants/element-config.ts'

export function PagesFilter () {
  const { maximumPages } = useBooks()
  const { pagesFilter, updatePagesFilter } = useFilters()

  const roundedPages = roundPages(maximumPages, PAGES_FILTER_CONFIG.ROUND_MULTIPLE)

  const handleChangePagesFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pagesNumber = Number(event.target.value)
    updatePagesFilter(pagesNumber)
  }

  return (
        <label
          className={componentClasses.pagesFilter}
        >
          {FIELD_LABELS.MinimumPages}
          <input
            className={componentClasses.slider}
            aria-label={ARIA_LABELS.PagesFilter}
            type="range"
            min={PAGES_FILTER.MINIMUM_VALUE}
            max={roundedPages}
            step={PAGES_FILTER.STEP}
            value={pagesFilter}
            onChange={handleChangePagesFilter}
          />
          <span>
            {`${pagesFilter} ${TEXT_CONTENT.PagesAbbreviation}`}
          </span>
        </label>
  )
}
