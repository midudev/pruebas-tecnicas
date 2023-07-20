import React, { useContext, useState, useRef } from "react";
import { BooksAvailable } from "../../context/contextBooks";
import styles from "./form.module.css"
import { FiltersContext } from "../../context/contextFilters";
import useFilter from "../../Hooks/useFilter";
import useSearchBook from "../../Hooks/useSearchBook";


const Form = () => {

    const [store, dispatch] = useContext(BooksAvailable);  
    const {listBooks, listRead, genres} = store;
    const [paginas, setPaginas]= useState(0)
    const [filters]=useContext(FiltersContext)
    const [books, read, setFilters] =useFilter()
    const [search, setSearch] = useState("")
    const [pepe]= useSearchBook(search)
    

    const handleChange = (e)=>{
setSearch(e.target.value)
console.log(search)
    }
    
    const onChangeSelect= (e)=>{
let genre = e.target.value
setFilters({...filters, genre:genre})
}

    const onChangePages = (e)=>{
        let pages = e.target.value;
        setPaginas(pages)
        setFilters({...filters, minPages:pages})
    }

    const handleSubmit = (e) =>{
    e.preventDefault()
console.log(search)
setFilters({...filters, search:search})

    }

  return (
    < div className={styles.options}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input onChange={handleChange} name="search" className={styles.searchInput} type="text" placeholder="Busca libros disponibles"/>
            <button type="submit" className={styles.searchButton}>Buscar</button>
        </form>
        <div className={styles.filters}>
            <div className={styles.genreFilter}>
                <label>Filtar por genero</label>
            <select onChange={onChangeSelect}>
                    {genres && genres.map((genre)=>{
                        return<option key={genre}>{genre}</option>
                    })}
                </select>
            </div> 
            <div className={styles.pagesFilter}>
                <label htmlFor="pages">Filtar por paginas</label>
                <div>
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
                    <span>Minimo de paginas {paginas}</span> 
                </div> 
            </div>      
        </div>
    </div>
  )
}

export default Form