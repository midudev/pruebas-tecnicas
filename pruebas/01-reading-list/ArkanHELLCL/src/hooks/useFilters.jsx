import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext)    

    const filterLibrary = (library) => {
      const pageFiltered = library.filter((item) => {
        return (
          (filters.type === 'all' || Object.keys(item)[0] === filters.type) &&         
          (filters.genre === 'all' || item[Object.keys(item)[0]].genre === filters.genre) &&
          (filters.author === 'all' || item[Object.keys(item)[0]].author.name === filters.author) &&
          (filters.year === 0 || item[Object.keys(item)[0]].year >= filters.year) &&
          (filters.totalPages === 0 || item[Object.keys(item)[0]].pages >= filters.totalPages)
        )
      })
      filters.totalFilterd = pageFiltered.length
      filters.itemsFileterd = pageFiltered
      return pageFiltered.slice((filters.page - 1) * filters.pageSize, filters.page * filters.pageSize)
    }
    return {filters, filterLibrary, setFilters}
  }
  