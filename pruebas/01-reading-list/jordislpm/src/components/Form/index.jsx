import React, { useContext, useState, useRef, useEffect } from "react";
import { BooksAvailable } from "../../context/contextBooks";
import styles from "./form.module.css"
import { FiltersContext } from "../../context/contextFilters";
import useFilter from "../../Hooks/useFilter";
import useSearchBook from "../../Hooks/useSearchBook";
import find from "../../../public/icons/find.svg"


const Form = () => {

    const [store, dispatch] = useContext(BooksAvailable);  
    const {genres} = store;
    const [paginas, setPaginas]= useState(0)
    const [filters]=useContext(FiltersContext)
    const {setFilters} =useFilter()
    const [newSearch, setNewSearch]= useState("")
    const [search, setSearch , error]= useSearchBook()

    

    const handleChange = (e)=>{
        setNewSearch(e.target.value)
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
    setSearch(newSearch)
    setFilters({...filters, search:newSearch})
    }


    useEffect(()=>{
        if(newSearch == ""){
            setSearch("")
        }
    },[newSearch])

  return (
    < div className={styles.options}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input onChange={handleChange} value={newSearch} name="search" className={styles.searchInput} type="text" placeholder="Busca libros disponibles"/>
            <button type="submit" className={styles.searchButton}>
                <img src={find}></img>
            </button>
        </form>
        <div className={styles.filters}>
            <div className={styles.genreFilter}>
                <label className={styles.label}>Filtar por genero</label>
            <select onChange={onChangeSelect}>
                    {genres && genres.map((genre)=>{
                        return<option key={genre}>{genre}</option>
                    })}
                </select>
            </div> 
            <div className={styles.pagesFilter}>
                <label className={styles.label}>Filtar por paginas</label>
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
                    <span className={styles.span}>Minimo de paginas {paginas}</span> 
                </div> 
            </div>      
        </div>
    </div>
  )
}

export default Form