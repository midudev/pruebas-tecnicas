/*
  Porque este custom hook?
*/

import { useEffect, useRef, useState } from 'react'
import { useBookZustandStore } from './useBookZustandStore'
import { saveToLocalStorage } from '../utils/saveToLocalStorage'
import { LOCAL_STORAGE_KEYS } from '../constants'

export function useFilteredBooks () {
  const { books, readingList } = useBookZustandStore()
  const booksBackup = useRef()

  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    if (books.length > 0 && !booksBackup.current) { // si hay libros y no hay copia de los libros
      booksBackup.current = [...books] // hace una copia de los libros
    }

    const copyBooks = booksBackup.current ?? [...books] // copia de los libros

    const mapBooks = copyBooks.map((book) => {
      if (readingList.length === 0) return book // si no hay libros en readinglist no hace nada

      const { id } = book // si hay libros en readinglist, obtenemos el id de cada libro
      const bookIsCopy = readingList.find((book) => book.id === id) // si el id del libro es igual al id del libro en readinglist, entonces es una copia

      if (bookIsCopy) return // si es una copia, no lo retorna

      return book // si no es una copia, lo retorna al nuevo array
    }) // con map books lo que se hace es filtrar los libros que estan en readinglist (los quita de booksState)

    const filteredBooks = mapBooks.filter((item) => item !== undefined) // en mapBooks si hay una copia hace un return por lo que hay undefined, y aqui lo filtramos para tener un array limpio de undefined

    if (booksBackup.current?.length > 0) {
      // guardar en localStorage
      saveToLocalStorage(LOCAL_STORAGE_KEYS.booksState, filteredBooks)
      saveToLocalStorage(LOCAL_STORAGE_KEYS.readingListState, readingList)
    }

    // if (books.length > 0) saveToLocalStorage(LOCAL_STORAGE_KEYS.booksState, filteredBooks)
    // if (readingList.length > 0) saveToLocalStorage(LOCAL_STORAGE_KEYS.readingListState, readingList)

    setFilteredBooks(filteredBooks)
  }, [books, readingList])

  return {
    filteredBooks
  }
}
