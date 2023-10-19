import { createContext, useReducer, useState} from "react";

export const FiltersContext = createContext(null)




export default function FiltersProvider({children}){

    const [filters, setFilters] = useState({
        genre: "Todas",
        minPages: 0,
        search: ""})
    return (
        <FiltersContext.Provider value={[filters, setFilters]}>
            {children}
        </FiltersContext.Provider>
    )
}