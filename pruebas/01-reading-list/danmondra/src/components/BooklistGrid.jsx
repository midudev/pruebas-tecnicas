import { useEffect } from 'react'
import { useRouterScroll } from '../hooks/useRouterScroll'
import { useBooks } from '../hooks/useBooks.jsx'
import { useFilters } from '../hooks/useFilters'
import { useBooklistGridStyles } from '../hooks/useBooklistGridStyles'
import { returnBookToOriginalPosition, takeBookToTargetElement } from '../helpers/bookPositions'
import { $ } from '../utils'
import styles from '../styles/main.module.css'
import { DESKTOP_LARGE_DEVICE_SIZE } from '../constants/globals'
import { NAVIGATION_PATHS } from './Header'

export function BooklistGrid({ selectedBook, setSelectedBook }) {
  const { currentPath } = useRouterScroll()
  const { books, booksInLists } = useBooks()
  const { filters, filteredBooks } = useFilters()
  const { elementToApply, rows, opacity } = useBooklistGridStyles({ books })

  const pathIsLists = currentPath === NAVIGATION_PATHS.LISTS

  const resetBook = ({ transitions = false } = {}) => {
    returnBookToOriginalPosition({ transitions })
    setSelectedBook({})
  }

  useEffect(() => {
    window.addEventListener('resize', resetBook)
  }, [])

  useEffect(() => {
    if (selectedBook?.title) {
      resetBook({ transitions: pathIsLists })
    }
  }, [currentPath, filters])

  const handleClickInLists = () => {
    // TODO --- Think in what to do when the book is clicked in lists
  }

  const handleClickInExplore = (clickedBook, target) => {
    if (window.innerWidth >= DESKTOP_LARGE_DEVICE_SIZE) {
      returnBookToOriginalPosition()

      const $imagePositionTarget = $('#imagePositionTarget')
      takeBookToTargetElement({
        $bookToTake: target,
        $elementTarget: $imagePositionTarget
      })
    }

    setSelectedBook(clickedBook)
    target.dataset.selected = true
  }

  const handleClick = ({ target }) => {
    const { isbn, selected } = target?.dataset
    const clickedBook = books.find((book) =>
      book.ISBN === isbn)

    if (!isbn || !clickedBook || target.nodeName !== 'IMG') return

    if (selected === 'true') {
      return resetBook({ transitions: true })
    }

    if (pathIsLists) {
      return handleClickInLists()
    } else {
      return handleClickInExplore(clickedBook, target)
    }
  }

  const handleDragStart = (e) => {
    const { target, dataTransfer } = e
    if (!pathIsLists || target.nodeName !== 'IMG') return

    const isbn = target.dataset.isbn

    dataTransfer.setData('text', JSON.stringify({ isbn }))
  }

  return (
    <ul
      className={`${styles.booklist} ${pathIsLists ? styles.pathIsLists : ''} booklist`}
      onClick={handleClick}
      onDragStart={handleDragStart}
      ref={elementToApply}
      style={{
        gridTemplateRows: rows,
        opacity
      }}
    >
      {filteredBooks.map((book) => (
        <li
          key={book.ISBN}
          className={styles.book}
          data-book-in-list={booksInLists.includes(book.ISBN)}
        >
          <button role='button'>
            <img
              src={book.cover}
              alt={`Cover of Book: "${book.title}"`}
              data-isbn={book.ISBN}
              draggable='true'
            />
          </button>
        </li>
      ))}
    </ul>
  )
}
