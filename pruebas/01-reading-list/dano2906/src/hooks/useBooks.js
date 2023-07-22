import { useEffect, useState } from 'react'
import { useReadListStore } from '../stores/BookStore'
import { getBooks } from '../services/books'

export const useBooks = () => {
  const [books, setBooks] = useState([])
  const [quantityByGenre, setQuantityByGenre] = useState(0)
  const [filterPages, setFilterPages] = useState(0)
  const [filterGenre, setFilterGenre] = useState('Todos')
  const loadStorage = useReadListStore(state => state.loadStorage)
  const { readList } = useReadListStore()

  const filterBooks = async () => {
    const { library } = await getBooks()

    // Filtrar todos los libros
    let filteredBooks = []
    if (filterGenre === 'Todos') {
      filteredBooks = library.filter((instance) => instance.book.pages >= Number(filterPages))
    } else {
      filteredBooks = library.filter((instance) => instance.book.pages >= Number(filterPages) && instance.book.genre === filterGenre)
    }
    setBooks(filteredBooks)

    // Calcular la cantidad de libros del genero seleccionado en la lista de lectura
    if (filterGenre === 'Todos') {
      setQuantityByGenre(filteredBooks.length - readList.length)
    } else {
      let ByGenreInReadList = 0
      readList.forEach(book => {
        if (book.genre === filterGenre) {
          ByGenreInReadList++
        }
      })
      setQuantityByGenre(filteredBooks.length - ByGenreInReadList)
    }
  }

  // Obtener todos los libros al cargar la página o cambiar los filtros
  useEffect(() => {
    filterBooks()
  }, [filterGenre, filterPages])

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
