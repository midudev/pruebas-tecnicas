import { useEffect, useState } from 'react'
import { useReadListStore } from '../stores/BookStore'

export const useBooks = () => {
  const [books, setBooks] = useState([])
  const [filterPages, setFilterPages] = useState(0)
  const [filterGenre, setFilterGenre] = useState('Todos')
  const { readList } = useReadListStore()
  const loadStorage = useReadListStore(state => state.loadStorage)

  const getBooks = async () => {
    const res = await fetch('books.json')
    if (res.ok) {
      const { library } = await res.json()
      let filtered = []
      if (filterGenre === 'Todos') {
        filtered = library.filter((instance) => instance.book.pages >= Number(filterPages))
      } else {
        filtered = library.filter((instance) => instance.book.pages >= Number(filterPages) && instance.book.genre === filterGenre)
      }
      setBooks(filtered)
    } else {
      throw new Error('Cannot get the books')
    }
  }

  // Obtener todos los libros cuando carga la pagina
  useEffect(() => {
    getBooks()
  }, [filterGenre, filterPages, books])

  // Sincronizar pestañas suscribiendo el evento storage
  useEffect(() => {
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'read_list') {
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
    setFilterGenre,
    setFilterPages,
    availableBooks: books.length - readList.length
  }
}
