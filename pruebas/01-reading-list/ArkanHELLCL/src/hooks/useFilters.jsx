import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

import { useReadingList } from "../hooks/useReadingList"

export function useFilters() {
    const {readingList} = useReadingList()
    const {filters, setFilters} = useContext(FiltersContext)      

    const filterLibrary = (library) => {
      
      const availableFiltered = filters.onlyAvailable ? library.filter((item) => {          
        return !readingList.some((book) => book.id === item.id)
      }) : library
      
      //console.log(availableFiltered)

      const pageFiltered = availableFiltered.filter((item) => {
        return (          
          (filters.type === 'all' || item.type === filters.type) &&         
          (filters.genre === 'all' || item.genre === filters.genre) &&
          (filters.author === 'all' || item.author === filters.author) &&
          (filters.year === 0 || item.year >= filters.year) &&
          (filters.totalPages === 0 || item.pages >= filters.totalPages) &&
          (filters.search === '' || item.title.toLowerCase().includes(filters.search.toLowerCase()))
        )
      })
      filters.totalFilterd = pageFiltered.length //> 0 ? pageFiltered.length : 1
      filters.itemsFileterd = pageFiltered
      return pageFiltered.slice((filters.page - 1) * filters.pageSize, filters.page * filters.pageSize)
    }
    return {filters, filterLibrary, setFilters}
  }
  