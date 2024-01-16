import type { Book as BookType } from '../../type'
import { useBoundStore } from '../../store/bound-store.ts'
import componentClasses from './AvailableBook.module.css'
import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import { BUTTON_LABELS, TEXT_CONTENT } from '../../constants/DOM-text.ts'

export function AvailableBook ({ book }: { book: BookType }) {
  const addBookToList = useBoundStore(state => state.addBookToList)
  const removeBookFromList = useBoundStore(state => state.removeBookFromList)
  const readingList = useBoundStore(state => state.booksInList)
  const { title, pages, genre, cover, author, ISBN, synopsis } = book

  const isBookInList = readingList.some(book => book.ISBN === ISBN)

  const createHandleAddBookToList = (bookToAdd: BookType) => () => {
    if (bookToAdd != null && !isBookInList) {
      addBookToList(bookToAdd)
    }
  }

  const createHandleRemoveBookFromList = (ISBN: string) => () => {
    if (isBookInList) {
      removeBookFromList(ISBN)
    }
  }

  const addedBookClass = isBookInList ? componentClasses.addedBook : ''

  return (
          <article
            className={componentClasses.bookCard}
            aria-label={ARIA_LABELS.AvailableBookCard}
          >
            <section
              className={componentClasses.bookCoverContainer}
            >
              <img
                aria-label={ARIA_LABELS.BookCover}
                className={addedBookClass}
                src={cover}
                alt={title}
              />
            </section>

            <section
              className={componentClasses.bookDetails}
            >
              <header>
                <h3
                  className={componentClasses.bookTitle}
                  aria-label={ARIA_LABELS.BookTitle}
                >
                  {title}
                </h3>

                <h4
                  className={componentClasses.authorName}
                  aria-label={ARIA_LABELS.BookAuthor}
                >
                  {author.name}
                </h4>

                <div
                  className={componentClasses.pagesAndGenre}
                >
                  <span
                    className={componentClasses.bookGenre}
                  >
                    {genre}
                  </span>

                  <span
                    className={componentClasses.bookPages}
                  >
                    {`${pages} ${TEXT_CONTENT.PagesAbbreviation}`}
                  </span>
                </div>
              </header>

              <p
                className={componentClasses.bookSynopsis}
              >
                {synopsis}
              </p>

              {
                !isBookInList
                  ? <button
                      aria-label={ARIA_LABELS.AddBookToList}
                      className={componentClasses.addBookToListButton}
                      onClick={createHandleAddBookToList(book) }
                    >
                      {BUTTON_LABELS.AddBookToList}
                    </button>

                  : <button
                      aria-label={ARIA_LABELS.RemoveBookFromList}
                      className={`${componentClasses.bookCardutton} ${componentClasses.removeBookButton}`}
                      onClick={createHandleRemoveBookFromList(ISBN)}
                    >
                      {BUTTON_LABELS.RemoveBookFromList}
                    </button>
              }
            </section>
          </article>
  )
}
