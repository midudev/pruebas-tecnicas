import { ARIA_LABELS } from '../../constants/aria-labels'
import { AVAILABLE_BOOKS_LIST_HEADER_ID } from '../../constants/element-attributes'
import { FIRST_PAGE, DEFAULT_PAGINATION_SIBLINGS, BOOKS_PER_PAGE } from '../../constants/pagination'
import { type PaginationParameters } from '../../type'
import { getPaginationNumbers, getPaginationRange } from '../../utils'
import { NextIcon, PreviousIcon } from '../Icons/Icons'
import componentClasses from './BookPagination.module.css'

interface BookPaginationProps
  extends Omit<PaginationParameters, 'totalPages'> {
  totalBooks: number
  handlePagination: (currentPage: number) => void
}

export function BookPagination ({
  currentPage,
  totalBooks,
  handlePagination,
  siblings = DEFAULT_PAGINATION_SIBLINGS
}: BookPaginationProps) {
  const totalPages = Math.ceil(totalBooks / BOOKS_PER_PAGE)
  const pagesRange = 2 * siblings + 1

  const paginationRange = getPaginationRange({ totalPages, currentPage, siblings })
  const paginationNumbers = getPaginationNumbers(paginationRange)

  const isFirstPage = currentPage === FIRST_PAGE
  const isLastPage = currentPage === totalPages

  const isWithinInitalRange = pagesRange != null && currentPage < pagesRange
  const isWithinFinalRange = pagesRange != null && currentPage > totalPages - pagesRange + 1
  const isTotalPagesWithinRange = totalPages <= pagesRange

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      handlePagination(currentPage - 1)
    }
  }

  const createHandlePageChange = (pageToGo: number) => () => {
    if (currentPage !== pageToGo) {
      handlePagination(pageToGo)
    }
  }

  const handleNextPage = () => {
    if (!isLastPage) {
      handlePagination(currentPage + 1)
    }
  }

  return (
            <nav
              aria-label={ARIA_LABELS.PaginationNavigation}
              className={componentClasses.paginationBar}
            >
              <ul className={componentClasses.numbersList}>
                <li>
                  {
                    isFirstPage
                      ? <PreviousIcon />
                      : <a
                          aria-label={ARIA_LABELS.PreviousPage}
                          className={componentClasses.pageNumber}
                          href={`#${AVAILABLE_BOOKS_LIST_HEADER_ID}`}
                          onClick={handlePreviousPage}
                        >
                          <PreviousIcon />
                        </a>
                  }
                </li>
                {
                  !isWithinInitalRange && !isTotalPagesWithinRange &&
                  <>
                    {
                      [FIRST_PAGE, FIRST_PAGE + 1].map((number, index) => (
                        <li
                          key={index}
                        >
                          <a
                            aria-label={`${ARIA_LABELS.GoToPage} ${number}`}
                            className={componentClasses.pageNumber}
                            href={`#${AVAILABLE_BOOKS_LIST_HEADER_ID}`}
                            onClick={createHandlePageChange(number)}
                          >
                            {number}
                          </a>
                        </li>
                      ))
                    }
                    <li>
                      ...
                    </li>
                  </>
                }
                {
                  paginationNumbers.map((number, index) => {
                    const isActivePage = currentPage === number

                    return (
                      <li
                        key={index}
                      >
                        {
                          isActivePage
                            ? <span
                                aria-label={`${ARIA_LABELS.CurrentPage} ${number}`}
                                className={`${componentClasses.pageNumber} ${componentClasses.activePage}`}
                              >
                                {number}
                              </span>
                            : <a
                                aria-label={`${ARIA_LABELS.GoToPage} ${number}`}
                                className={componentClasses.pageNumber}
                                href={`#${AVAILABLE_BOOKS_LIST_HEADER_ID}`}
                                onClick={createHandlePageChange(number)}
                              >
                                {number}
                              </a>
                        }
                      </li>
                    )
                  })
                }
                {
                  !isWithinFinalRange && !isTotalPagesWithinRange &&
                  <>
                    <li>
                      ...
                    </li>
                    {
                      [totalPages - 1, totalPages].map((number, index) => (
                        <li
                          key={index}
                        >
                          <a
                            aria-label={`${ARIA_LABELS.GoToPage} ${number}`}
                            className={componentClasses.pageNumber}
                            href={`#${AVAILABLE_BOOKS_LIST_HEADER_ID}`}
                            onClick={createHandlePageChange(number)}
                          >
                            {number}
                          </a>
                        </li>
                      ))
                    }
                  </>
                }
                <li>
                  {
                    isLastPage
                      ? <NextIcon />
                      : <a
                          aria-label={ARIA_LABELS.NextPage}
                          href={`#${AVAILABLE_BOOKS_LIST_HEADER_ID}`}
                          onClick={handleNextPage}
                          className={componentClasses.pageNumber}
                        >
                          <NextIcon />
                        </a>
                  }
                </li>
              </ul>
            </nav>
  )
}
