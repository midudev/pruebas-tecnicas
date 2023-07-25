'use client'

import styles from '../book.module.scss'
import { useReadingBooks } from '@/hooks/useReadingBooks'
import { getBook } from "@/utils/services"

export default function BookById({params}: {params: {ISBN: string}}){
  const { readingBooks, removeBook, addBook } = useReadingBooks()
  
  const book = getBook(params.ISBN)
  const inList = readingBooks.some(s=> s.ISBN == params.ISBN)

  return (
    <section className={styles['book_section']}>
      {book ? 
        <>
          <div className={styles['book_section-cover']}>
            <img src={book.cover} alt={`${book.title} cover`} />
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
              <span>Autor:</span>
              <strong>{book.author.name}</strong>
            </div>

            {inList ? 
              <button onClick={()=> removeBook(params.ISBN)}>Eliminar de la lista</button> :
              <button onClick={()=> addBook(book)}>Agragar a la lista</button>
            }
          </div>
        </> :
        <span>Ha ocurido un error</span>
      }
    </section>
  )
}