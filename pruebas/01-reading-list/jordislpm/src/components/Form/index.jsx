import React, { useContext, useState, useRef, useEffect } from "react";
import { BooksAvailable } from "../../context/contextBooks";
import styles from "./form.module.css"
import { FiltersContext } from "../../context/contextFilters";
import useFilter from "../../Hooks/useFilter";
import useSearchBook from "../../Hooks/useSearchBook";
import find from "../../../public/icons/find.svg"
import Search from "../Search";


const Form = () => {

    const [store, dispatch] = useContext(BooksAvailable);  
    const {genres} = store;
    const [paginas, setPaginas]= useState(0)
    const [filters]=useContext(FiltersContext)
    const {setFilters} =useFilter()
    const [newSearch, setNewSearch]= useState("")
    const {setSearch}= useSearchBook()

    
    const onChangeSelect= (e)=>{
let genre = e.target.value
setFilters({...filters, genre:genre})
}

    const onChangePages = (e)=>{
        let pages = e.target.value;
        setPaginas(pages)
        setFilters({...filters, minPages:pages})
    }

  return (
    < div className={styles.options}>
        <Search/>
        <div className={styles.filters}>
            <div className={styles.genreFilter}>
                <label className={styles.label}>Filtar por genero</label>
                <select className={styles.select} onChange={onChangeSelect}>
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