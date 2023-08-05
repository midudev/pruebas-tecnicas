import { useState } from 'react'
import { EditorialInfo } from './EditorialInfo.jsx'
import { BookContent } from './BookContent.jsx'
import { BooklistGrid } from './BooklistGrid.jsx'
import styles from '../styles/main.module.css'
import { Filters } from './Filters.jsx'

export function Explore() {
  const [selectedBook, setSelectedBook] = useState({})

  const classIfThereIsSelectedBook = selectedBook?.title
    ? styles.thereIsSelectedBook
    : ''

  return (
    <section className={styles.explore} id='explorar'>
      <Filters />
      <section
        className={`${styles.mainContent} ${classIfThereIsSelectedBook}`}
      >
        <EditorialInfo />
        <BookContent
          book={selectedBook}
        />
      </section>
      <section className={styles.booklistContainer}>
        <BooklistGrid
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
      </section>
    </section>
  )
}
