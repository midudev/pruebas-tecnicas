import { useEffect, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { useReadListStore } from '../stores/BookStore'
import { getBooks } from '../services/books'

export const useBooks = () => {
  // Libros para renderizar y cantidad de libros renderizados...dependen de los filtros
  const [books, setBooks] = useState([])
  const [quantityByGenre, setQuantityByGenre] = useState(0)

  // Filtros
  const [filterPages, setFilterPages] = useState(0)
  const [filterGenre, setFilterGenre] = useState('Todos')
  const [searchBooks, setSearchBooks] = useState('')
  const debouncedFilterPages = useDebounce(filterPages, 300)
  const debouncedSearchBooks = useDebounce(searchBooks, 300)

  // Estado global
  const loadStorage = useReadListStore(state => state.loadStorage)
  const { readList } = useReadListStore()

  // Función para filtrar los libros
  const filterBooks = async () => {
    let filteredBooks = (await getBooks()).library

    // Filtrar todos los libros por nombre
    if (debouncedSearchBooks.length > 0) {
      filteredBooks = filteredBooks.filter(({ book }) => book.title.includes(debouncedSearchBooks))
    }

    // Filtrar todos los libros por páginas y genero
    if (filterGenre === 'Todos') {
      filteredBooks = filteredBooks.filter(({ book }) => book.pages >= Number(debouncedFilterPages))
    } else if (filterGenre !== 'Todos') {
      filteredBooks = filteredBooks.filter(({ book }) => book.pages >= Number(debouncedFilterPages) && book.genre === filterGenre)
    }
    setBooks(filteredBooks)

    // Calcular la cantidad de libros del genero seleccionado en la lista de lectura
    if (filterGenre === 'Todos') {
      setQuantityByGenre(() => {
        if (filteredBooks.length === 0) {
          return filteredBooks.length
        } else {
          return filteredBooks.length - readList.length
        }
      })
    } else {
      let ByGenreInReadList = 0
      readList.forEach(book => {
        if (book.genre === filterGenre) {
          ByGenreInReadList++
        }
      })
      setQuantityByGenre(() => {
        if (filteredBooks.length === 0) {
          return filteredBooks.length
        } else {
          return filteredBooks.length - ByGenreInReadList
        }
      })
    }
  }

  // Obtener todos los libros al cargar la página o cambiar los filtros
  useEffect(() => {
    filterBooks()
  }, [filterGenre, debouncedFilterPages, debouncedSearchBooks])

  // Sincronizar pestañas suscribiendo el evento storage
  useEffect(() => {
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'readList') {
        const { state } = JSON.parse(ev.newValue)
        const { readList } = state
        loadStorage(readList)
      }
    })
    return () => {
      window.removeEventListener('storage', () => {

      })
    }
  }, [])

  return {
    books,
    quantityByGenre,
    filterPages,
    searchBooks,
    setFilterGenre,
    setFilterPages,
    setSearchBooks
  }
}
