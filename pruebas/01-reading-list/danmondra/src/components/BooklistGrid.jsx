import { useEffect } from 'react'

import { DESKTOP_LARGE_DEVICE_SIZE } from '../constants/globals'
import { returnBookToOriginalPosition, takeBookToTargetElement } from '../helpers/bookPositions'
import { useBooklistGridStyles } from '../hooks/useBooklistGridStyles'
import { useBooks } from '../hooks/useBooks.jsx'
import { useFilters } from '../hooks/useFilters'
import { useRouterScroll } from '../hooks/useRouterScroll'
import styles from '../styles/main.module.css'
import { $, $child } from '../utils'
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

  const handleClickInExplore = (target, clickedBook) => {
    if (window.innerWidth >= DESKTOP_LARGE_DEVICE_SIZE) {
      returnBookToOriginalPosition()

      const $imagePositionTarget = $('#imagePositionTarget')
      const $bookElementToTake = $child(target, 'img')

      takeBookToTargetElement({
        $bookElementToTake,
        $elementTarget: $imagePositionTarget
      })
    }

    setSelectedBook(clickedBook)
    target.dataset.selected = true
  }

  const handleClick = (e) => {
    const { currentTarget } = e
    const { isbn, selected } = currentTarget?.dataset
    const clickedBook = books.find((book) =>
      book.ISBN === isbn)

    if (!isbn || !clickedBook) return

    if (selected === 'true') {
      return resetBook({ transitions: true })
    }

    if (pathIsLists) {
      return handleClickInLists()
    } else {
      return handleClickInExplore(currentTarget, clickedBook)
    }
  }

  const handleDragStart = (e) => {
    const { currentTarget, dataTransfer } = e
    if (!pathIsLists) return

    const isbn = currentTarget.dataset.isbn

    dataTransfer.setData('text', JSON.stringify({ isbn }))
  }

  return (
    <ul
      className={`${styles.booklist} ${pathIsLists ? styles.pathIsLists : ''} booklist`}
      ref={elementToApply}
      role='list'
      data-testid='booklistGrid'
      style={{
        gridTemplateRows: rows,
        opacity
      }}
    >
      {filteredBooks.map((book, i) => (
        <li
          key={book.ISBN}
          className={styles.book}
          data-book-in-list={booksInLists.includes(book.ISBN)}
          role='listitem'
        >
          <button
            role='button'
            aria-label={`abrir libro ${book.title} del autor ${book.author.name}`}
            onClick={handleClick}
            onDragStart={handleDragStart}
            data-isbn={book.ISBN}
            draggable='true'
          >
            <img
              src={book.cover}
              alt={`Cover of Book: "${book.title}"`}
              data-isbn={book.ISBN}
              draggable='false'
            />
          </button>
        </li>
      ))}
    </ul>
  )
}
