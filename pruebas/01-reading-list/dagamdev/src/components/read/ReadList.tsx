'use client'

import styles from './read.module.scss'
import { useReadingBooks } from '@/hooks/useReadingBooks'
import Book from '../book/BookCard'
import BooksCounter from '../book/BooksCounter'

export default function ReadList(){
  const { openList, readingBooks } = useReadingBooks()

  return (
    <section className={`${styles.read} ${openList ? styles.open : ''}`}>
      {readingBooks.length ? 
        <BooksCounter text={`Lista de lectura con {} libros`} /> :
        <strong>Lista de lectura bacia</strong>
      }

      <ul className={styles['read-list']}>
        {readingBooks.map(b=> <Book key={b.ISBN} book={b} />)}
      </ul>
    </section>
  )
}