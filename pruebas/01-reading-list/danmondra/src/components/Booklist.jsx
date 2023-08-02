import { useState, useEffect } from 'react'
import { useRouterScroll } from '../hooks/useRouterScroll'
import { useBooks } from '../hooks/useBooks.jsx'
import { useFilters } from '../hooks/useFilters'
import { returnBookToOriginalPosition, takeBookToTargetElement } from '../helpers/bookPositions'
import { $ } from '../utils'
import { NAVIGATION_PATHS } from './Header'
import styles from '../styles/main.module.css'

export function Booklist({ selectedBook, setSelectedBook }) {
  const { currentPath } = useRouterScroll()
  const { books, booksInLists } = useBooks()
  const { filters, filteredBooks } = useFilters()
  const [gridRows, setGridRows] = useState('')
  const [opacity, setOpacity] = useState('0')

  const pathIsLists = currentPath === NAVIGATION_PATHS.LISTS

  useEffect(() => {
    const calculateGrid = () => {
      const columns = 6
      const rows = Math.ceil(books.length / columns)
      const containerHeight = document.querySelector('.booklist')?.offsetHeight

      setGridRows(`repeat(${rows}, ${containerHeight / columns}px)`)
    }

    window.addEventListener('resize', () => {
      returnBookToOriginalPosition()
      setSelectedBook({})
      calculateGrid()
    })
    calculateGrid()

    setTimeout(() => {
      setOpacity('1')
    }, 200)
  }, [])

  useEffect(() => {
    if (selectedBook?.title && pathIsLists) {
      returnBookToOriginalPosition({ transitions: true })
      setSelectedBook({})
    }
  }, [currentPath])

  useEffect(() => {
    if (selectedBook?.title) {
      console.log('prueba')
      returnBookToOriginalPosition()
      setSelectedBook({})
    }
  }, [filters])

  const handleClick = ({ target }) => {
    const targetIsAlreadySelected = target.dataset?.selected === 'true'
    if (targetIsAlreadySelected) {
      returnBookToOriginalPosition({ transitions: true })
      return setSelectedBook({})
    }
    if (pathIsLists || target.nodeName !== 'IMG') return

    if (window.innerWidth >= 1361) {
      returnBookToOriginalPosition()
      const $imagePositionTarget = $('#imagePositionTarget')
      takeBookToTargetElement({
        $bookToTake: target,
        $elementTarget: $imagePositionTarget
      })
    }

    const { isbn } = target.dataset
    const clickedBook = books.find((book) =>
      book.ISBN === isbn)
    setSelectedBook(clickedBook)
    target.dataset.selected = true
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
      style={{
        gridTemplateRows: window.innerWidth >= 1360 ? gridRows : '5rem',
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
