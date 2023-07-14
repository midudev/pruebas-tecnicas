'use client'
import { useState } from 'react'
import booksData from "../../books.json"
import styles from './page.module.css'
import ListOfBooks from '@/components/ListOfBooks'

export default function Home() {
  const [filteredBooks,setFilteredBooks] = useState(booksData.library)
  return (
    <main className={styles.main}>
      <h1>Reading List</h1>
      <h4>{filteredBooks.length} libros disponibles</h4>
      <ListOfBooks books={filteredBooks}/>
    </main>
  )
}
