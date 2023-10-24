import { useContext } from 'react'
import { LibraryFiltersContext } from '../components/context/LibraryFiltersContext'


//hook que permite acceder al contexto.
export function useLibraryFilters () {
  const { filters, setFilters } = useContext(LibraryFiltersContext)
   
  //función para filtrar por páginas y género.
   const filterBooks = (library) => {
    return library.filter((book) => {
      return (
        book.book.pages >= filters.minPages &&
        (
          filters.genre === 'all' ||
          book.book.genre === filters.genre
        )
      )
    })
  }
 
  return { filters, filterBooks, setFilters }
}