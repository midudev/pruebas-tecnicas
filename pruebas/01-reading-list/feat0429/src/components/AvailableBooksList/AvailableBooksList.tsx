import { AvailableBook } from '../AvailableBook/AvailableBook.tsx'
import { AvailableBooksListHeader } from '../AvailableBooksListHeader/AvailableBooksListHeader.tsx'
import { useBooks } from '../../hooks/useBooks.ts'
import { BooksResultsMessage } from '../BooksResults/BooksResultsMessage.tsx'
import { SadEmoji, SickEmoji } from '../Icons/Icons.tsx'
import { RESULT_MESSAGES } from '../../constants/DOM-text.ts'
import componentClasses from './AvailableBooksList.module.css'
import { useFilters } from '../../hooks/useFilters.ts'
import { useSearch } from '../../hooks/useSearch.ts'
import { BookPagination } from '../BookPagination/BookPagination.tsx'
import { usePagination } from '../../hooks/usePagination.ts'
import { sortBooks } from '../../utils.ts'
import { animated, useTransition } from '@react-spring/web'

export function AvailableBooksList () {
  const { availableBooks, areBooksLoading, isBookRequestError } = useBooks()
  const { filterBooks } = useFilters()
  const { searchBooks } = useSearch()
  const { pagination, changePage, sliceBooks } = usePagination()

  const sortedBooks = sortBooks(availableBooks)
  const filteredBooks = filterBooks(sortedBooks)
  const searchedBooks = searchBooks(filteredBooks)
  const paginatedBooks = sliceBooks(searchedBooks)

  const paginatedBooksTransitions = useTransition(paginatedBooks, {
    keys: (book) => book.ISBN,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 100
    }
  })

  return (
        <section
          className={componentClasses.availableBooks}
        >
          <AvailableBooksListHeader />

            {
              areBooksLoading &&
              <div className={componentClasses.messageContainer}>
                <BooksResultsMessage message={RESULT_MESSAGES.LoadingBooks} />
              </div>
            }
            {
              isBookRequestError &&
              <div className={componentClasses.messageContainer}>
                <BooksResultsMessage message={RESULT_MESSAGES.BooksRequestError}>
                  <SickEmoji />
                </BooksResultsMessage>
              </div>
            }
            {
              !areBooksLoading &&
              !isBookRequestError &&
              <>
                {
                  paginatedBooks.length === 0
                    ? <div className={componentClasses.messageContainer}>
                      <BooksResultsMessage message={RESULT_MESSAGES.NoAvailableBooksFound}>
                        <SadEmoji />
                      </BooksResultsMessage>
                    </div>
                    : <>
                        <div
                          className={componentClasses.bookList}
                        >
                          {
                            paginatedBooksTransitions((style, book) =>
                                    <animated.div style={style}>
                                   <AvailableBook
                                      book={book}
                                    />
                                    </animated.div>
                            )
                          }
                        </div>
                        <BookPagination
                          currentPage={pagination.currentPage}
                          totalBooks={searchedBooks.length}
                          handlePagination={changePage}
                        />
                      </>
                }
              </>
            }
        </section>
  )
}
