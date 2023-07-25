'use client'

import styles from './books.module.scss'
import Link from 'next/link'
import { useState, useEffect, type MouseEvent } from 'react'
import { Book } from "@/utils/types"
import { useReadingBooks } from '@/hooks/useReadingBooks'
import { updateReadingBooks } from '@/utils/services'

export default function Book({book, scale}: {
  book: Book
  scale?: number
}){
  const { addBook, removeBook, readingBooks } = useReadingBooks()
  const [inList, setInList] = useState(false)
  
  useEffect(()=> {
    setInList(readingBooks.some(s=> s.ISBN == book.ISBN))
    updateReadingBooks(readingBooks)
  }, [readingBooks])

  const toggleBook = (e: MouseEvent<HTMLElement>) => {
    // e.preventDefault()
    setInList(i=> !i)
    if(inList) removeBook(book.ISBN)
    else addBook(book)
  }

  return (
    <li className={styles.book} style={{scale}}>
      <div onClick={toggleBook} className={`${styles['book-mark']} ${inList ? styles.inList : ''}`}>
        <div className={styles['book-mark-icon']} />
      </div>
     
      <Link href={`/book/${book.ISBN}`}>
        <div className={styles['book-image']}>
          <div></div>
          <img src={book.cover} alt={book.title+' cover'} width={160} />
        </div>
        <div className={styles['book-info']}>
          <strong>{book.title}</strong>
        </div>
      </Link>
    </li>
  )
}