'use client'

import styles from './read.module.scss'
import { useReadingBooks } from '@/hooks/useReadingBooks'
import BooksCounter from '../book/BooksCounter'
import ReadCard from './ReadCard'

export default function ReadList(){
  const { openList, readingBooks } = useReadingBooks()

  return (
    <section className={`${styles.read} ${openList ? styles.open : ''}`}>
      <div className={styles['read-title']}>
        {readingBooks.length ? 
          <BooksCounter text={`Lista de lectura con {} libros`} /> :
          <strong>Lista de lectura bacia</strong>
        }
      </div>

      <ul className={styles['read-list']}>
        {readingBooks.map(b=> <ReadCard key={b.ISBN} book={b} />)}
      </ul>
    </section>
  )
}