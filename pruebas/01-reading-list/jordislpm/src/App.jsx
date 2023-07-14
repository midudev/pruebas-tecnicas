import { useState, useEffect } from 'react'
import data from "../json/libros.json"
import BookList from './components/BookList'
import styles from "./styles/app.module.css"
import Header from './components/Header'


function App() {
  return (
    <>
    <Header/>
    <main className={styles.main}>
    <BookList/>
    </main>
    </>
  )
}

export default App
