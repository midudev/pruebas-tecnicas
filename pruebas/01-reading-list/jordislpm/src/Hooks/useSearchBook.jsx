import { useState, useEffect, useContext, useRef } from "react"


const useSearchBook = (newSearch)=>{
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null)
    const firstSearch = useRef(true)

    useEffect(()=>{

        if(firstSearch.current){
            firstSearch.current = newSearch === ""
            return
        }
        if(newSearch === ""){
            setError("No se puede buscar una pelicula vacia")
            alert(error)
            return
        }

        if(newSearch.match(/^\d+$/)){
            setError("No se puede buscar un libro con un numero")
        }

        if(newSearch.length < 3){
            setError("la Busqueda debe tener al menos 3 letras")
        }
    },[search])

    console.log(newSearch)

    return[search, setSearch , error]

}

export default useSearchBook;