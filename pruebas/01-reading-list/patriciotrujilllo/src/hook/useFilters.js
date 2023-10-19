import { useContext } from 'react'
import { FilterContext } from '../context/filtersContext' 

export const useFilters = () =>{
    const { filters,setFilters } = useContext(FilterContext)

    const filterBooks = (books) =>{
        return(
            books.filter(book => filters.genre=== 'all' || book.book.genre===filters.genre).filter(book => filters.pages[0]<=book.book.pages & filters.pages[1]>=book.book.pages)
                .filter(book => filters.title==='' || book.book.title.toLowerCase().includes(filters.title.toLowerCase()))
        )
        //bookNoFiltered.filter(item=> read.includes(book => book.title === item.book.title))
    }
    return{
        filters,
        setFilters,
        filterBooks
    }
}