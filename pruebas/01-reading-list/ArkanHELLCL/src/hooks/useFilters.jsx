import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext)    

    const filterLibrary = (library) => {
      const pageFiltered = library.filter((item) => {
        return (          
          (filters.type === 'all' || item.type === filters.type) &&         
          (filters.genre === 'all' || item.genre === filters.genre) &&
          (filters.author === 'all' || item.author === filters.author) &&
          (filters.year === 0 || item.year >= filters.year) &&
          (filters.totalPages === 0 || item.pages >= filters.totalPages) &&
          (filters.search === '' || item.title.toLowerCase().includes(filters.search.toLowerCase()))
        )
      })
      filters.totalFilterd = pageFiltered.length
      filters.itemsFileterd = pageFiltered
      return pageFiltered.slice((filters.page - 1) * filters.pageSize, filters.page * filters.pageSize)
    }
    return {filters, filterLibrary, setFilters}
  }
  