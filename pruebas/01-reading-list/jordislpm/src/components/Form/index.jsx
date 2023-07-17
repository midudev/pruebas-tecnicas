import React, { useContext, useState, useRef } from "react";
import { BooksAvailable } from "../../context/contextBooks";
import styles from "./form.module.css"
import { FiltersContext } from "../../context/contextFilters";
import useFilter from "../../Hooks/useFilter";


const Form = () => {

    const [store, dispatch] = useContext(BooksAvailable);  
    const {listBooks, listRead, genres} = store;
    const [selectGenre, setSelectGenre]= useState()
    const [paginas, setPaginas]= useState(0)
    const [filters]=useContext(FiltersContext)
    const [books, read, setFilters] =useFilter()
    
    const onChangeSelect= (e)=>{
let genre = e.target.value
// dispatch({type:"GenreFilter", genre:genre })
setFilters({...filters,genre:genre})
}

    const onChangePages = (e)=>{
        setPaginas(e.target.value)
        // dispatch({type: "PageFilter", page:paginas})
        setFilters({minPages:paginas, ...filters})
    }

  return (
    <form>
        <div>
            <label htmlFor="pages">Filtar por paginas</label>
            <input 
                type="range"
                id="pages"
                min="10" 
                max="1000" 
                step="10"
                value={paginas}
                onChange={onChangePages}  
                placeholder="Filtrar por paginas">
            </input>
            <span>Libros de mas de{paginas}</span>    
        </div>
       <div>
        filtar por genero
       <select onChange={onChangeSelect}>
            {genres && genres.map((genre)=>{
                return<option key={genre}>{genre}</option>
            })}
        </select>
       </div>
       
    </form>
  )
}

export default Form