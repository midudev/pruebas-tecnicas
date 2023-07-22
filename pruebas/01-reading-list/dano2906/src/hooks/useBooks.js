import { useEffect, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { useReadListStore } from '../stores/BookStore'
import { getBooks } from '../services/books'

export const useBooks = () => {
  const [books, setBooks] = useState([])
  const [quantityByGenre, setQuantityByGenre] = useState(0)
  const [filterPages, setFilterPages] = useState(0)
  const debouncedFilterPages = useDebounce(filterPages, 300)
  const [filterGenre, setFilterGenre] = useState('Todos')
  const loadStorage = useReadListStore(state => state.loadStorage)
  const { readList } = useReadListStore()

  const filterBooks = async () => {
    const { library } = await getBooks()

    // Filtrar todos los libros
    let filteredBooks = []
    if (filterGenre === 'Todos') {
      filteredBooks = library.filter((instance) => instance.book.pages >= Number(debouncedFilterPages))
    } else {
      filteredBooks = library.filter((instance) => instance.book.pages >= Number(debouncedFilterPages) && instance.book.genre === filterGenre)
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
  }, [filterGenre, debouncedFilterPages])

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
    setFilterGenre,
    setFilterPages
  }
}
