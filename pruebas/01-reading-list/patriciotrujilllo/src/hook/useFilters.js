import { useContext } from 'react'
import { FilterContext } from '../context/filtersContext' 

export const useFilters = () =>{
    const { filters,setFilters } = useContext(FilterContext)

    const filterBooks = (books) =>{
        return(
            books.filter(book => filters.genre=== 'all' || book.book.genre===filters.genre)
        )
        
    }
    return{
        filters,
        setFilters,
        filterBooks
    }
}