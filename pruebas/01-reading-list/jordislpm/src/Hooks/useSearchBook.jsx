import { useState, useEffect, useContext, useRef } from "react"
import useFilter from "./useFilter";
import { FiltersContext } from "../context/contextFilters";


const useSearchBook = ()=>{
    const [filters]=useContext(FiltersContext)
    const {setFilters} =useFilter()
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null)
    const firstSearch = useRef(true)
  

    useEffect(()=>{
     
        if(firstSearch.current){
            firstSearch.current = search === ""
            return
        }
        if(search === ""){
            setError("No se puede buscar una pelicula vacia")
            setFilters({...filters, search:search})
            return
        }

       if(search.length < 3){
            setError("la Busqueda debe tener al menos 3 letras")
        } 
        if(search != ""){
            setFilters({...filters, search:search})
   
        }

        
        

    },[search])



    return[search, setSearch , error]

}

export default useSearchBook;