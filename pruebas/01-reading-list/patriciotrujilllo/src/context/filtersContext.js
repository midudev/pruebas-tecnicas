import { createContext,useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({children}) =>{
    const [filters,setFilters] = useState({
        genre : 'all',
        pages : [0,2000],
        title : ''
    })

    return(
        <FilterContext.Provider value={{
            filters,
            setFilters
        }}>
        {children}
        </FilterContext.Provider>
    )
}
