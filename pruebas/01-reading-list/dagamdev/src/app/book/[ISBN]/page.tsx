'use client'

import styles from '../book.module.scss'
import { useState } from 'react'
import { useReadingBooks } from '@/hooks/useReadingBooks'
import { getBook, getBooksISBNs } from "@/utils/services"
import { LOCAL_KEYS } from '@/utils/config'

export default function BookById({params}: {params: {ISBN: string}}){
  const { readingBooks, removeBook, addBook } = useReadingBooks()
  const [priority, setPriority] = useState(() => {
    const priorityBooksISBNs = getBooksISBNs(LOCAL_KEYS.PRIORITY_BOOKS)
    return priorityBooksISBNs.some(s=> s == params.ISBN)
  })
  
  const book = getBook(params.ISBN)
  const inList = readingBooks.some(s=> s.ISBN == params.ISBN)

  const toggleReadingList = () => {
    if(inList) removeBook(params.ISBN)
    else if(book) addBook(book)
  }

  const togglePriority = () => {
    setPriority(p=> !p)
    const priorityISBNs = getBooksISBNs(LOCAL_KEYS.PRIORITY_BOOKS)
    const bookInPriorityList = priorityISBNs.some(s=> s == params.ISBN)
    if(priority && bookInPriorityList){
      localStorage.setItem(LOCAL_KEYS.PRIORITY_BOOKS, JSON.stringify(priorityISBNs.filter(f=> f != params.ISBN)))

    }else if(!bookInPriorityList){
      priorityISBNs.push(params.ISBN)
      localStorage.setItem(LOCAL_KEYS.PRIORITY_BOOKS, JSON.stringify(priorityISBNs))
    }
  }

  return (
    <section className={styles['book_section']}>
      {book ? 
        <>
          <div className={styles['book_section-cover']}>
            <img src={book.cover} alt={`${book.title} cover`} width={320} />
          </div>
          <div className={styles['book_section-body']}>
            <header>
              <h2>{book.title}</h2>
              <p>{book.synopsis}</p>
            </header>
            
            <div className={styles['book_section-info']}>
              <p><span>Año:</span> {book.year}</p>
              <p><span>Genero:</span> {book.genre}</p>
              <p><span>Paginas:</span> {book.pages.toLocaleString()}</p>
              <p><span>ISBN:</span> {book.ISBN}</p>
            </div>

            <div className={styles['book_section-author']}>
              <span>Autor</span>
              <strong>{book.author.name}</strong>
            </div>

            <div className={styles['book_section-buttons']}>
              <button onClick={toggleReadingList} className={inList ? styles.remove : ''} >{inList ? 'Eliminar de la lista' : 'Agragar a la lista'}</button>
              <button onClick={togglePriority} className={priority ? styles.remove : ''} >{priority ? 'Despriorizar' : 'Priorizar'}</button>
            </div>
          </div>
        </> :
        <span>Ha ocurido un error</span>
      }
    </section>
  )
}