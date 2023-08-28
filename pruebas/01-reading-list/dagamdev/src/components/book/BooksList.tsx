'use client'

import styles from './books.module.scss'
import { useBooks } from '@/hooks/useBooks'
import Book from './BookCard'
import BooksCounter from './BooksCounter'
import SearcherBooks from '../searcher/SearcherBooks'
import OrganizeBooks from './OrganizeBooks'

export default function Books(){
  const { books } = useBooks()

  return (  
    <div className={styles.content}>
      <SearcherBooks />
      <header>
        <BooksCounter text='Libros disponibles: {}' books={books.map(b=> b.ISBN)} />
        <OrganizeBooks />
      </header>

      <ul className={styles.books}>
        {/* {books.library.map(l=> <img key={l.book.title} src={l.book.cover} alt={l.book.title+' cover'} width={160} />)} */}
        {books.map(b=> <Book key={b.ISBN} book={b} />)}
      </ul>
    </div>
  )
}