/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        page: 1,
        pageSize: 12,        
        genre:'all',
        author:'all',
        year:1800,
        type:'all',
        totalFilterd:0,
        itemsFileterd:[]
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
        {children}
        </FiltersContext.Provider>
    )
}