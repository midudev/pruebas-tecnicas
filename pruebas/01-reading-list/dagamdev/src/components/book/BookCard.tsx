'use client'

import styles from './books.module.scss'
import Link from 'next/link'
import { useState, useEffect, type MouseEvent } from 'react'
import { Book } from "@/utils/types"
import { useReadingBooks } from '@/hooks/useReadingBooks'
import { getBooksISBNs, updateReadingBooks } from '@/utils/services'
import { BsBookmarkCheckFill, BsStarFill } from 'react-icons/bs'
import { LOCAL_KEYS } from '@/utils/config'

export default function Book({book}: {
  book: Book
}){
  const { addBook, removeBook, readingBooks } = useReadingBooks()
  const [inList, setInList] = useState(false)
  const [priority, setPriority] = useState(false)
  
  useEffect(()=> {
    setInList(readingBooks.some(s=> s.ISBN == book.ISBN))
    updateReadingBooks(readingBooks)
  }, [readingBooks])

  useEffect(()=> {
    const inPriority = getBooksISBNs(LOCAL_KEYS.PRIORITY_BOOKS).some(s=> s == book.ISBN)
    if(inPriority) setPriority(inPriority)
  }, [])

  const toggleReadBook = (e: MouseEvent<HTMLElement>) => {
    setInList(i=> !i)
    if(inList) removeBook(book.ISBN)
    else addBook(book)
  }

  const togglePriorityBook = () => {
    setPriority(p=> !p)
    const priorityISBNs = getBooksISBNs(LOCAL_KEYS.PRIORITY_BOOKS)
    const bookInPriorityList = priorityISBNs.some(s=> s == book.ISBN)
    if(priority && bookInPriorityList){
      localStorage.setItem(LOCAL_KEYS.PRIORITY_BOOKS, JSON.stringify(priorityISBNs.filter(f=> f != book.ISBN)))

    }else if(!bookInPriorityList){
      priorityISBNs.push(book.ISBN)
      localStorage.setItem(LOCAL_KEYS.PRIORITY_BOOKS, JSON.stringify(priorityISBNs))
    }
  }

  return (
    <li className={styles.book}>
      <div className={styles['book-options']}>
        <div onClick={toggleReadBook} className={`${styles['book-option']} ${inList ? styles.active : ''}`}>
          {/* <div className={styles['book-mark-icon']} /> */}
          <BsBookmarkCheckFill />
        </div>

        <div onClick={togglePriorityBook} className={`${styles['book-option']} ${priority ? styles.active : ''}`}>
          <BsStarFill />
        </div>
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