import React, {useContext, useState, useEffect} from 'react'
import { FiltersContext } from '../../context/contextFilters'
import useFilter from '../../Hooks/useFilter'
import styles from "./search.module.css"
import useSearchBook from '../../Hooks/useSearchBook'
import find from "../../../public/icons/find.svg"



const Search = () => {

    const [filters]=useContext(FiltersContext);
    const {setFilters} =useFilter()
    const [newSearch, setNewSearch]= useState("")
    const {setSearch}= useSearchBook()

    const handleChange = (e)=>{
      setNewSearch(e.target.value)
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
    <form onSubmit={handleSubmit} className={styles.form}>
            <input onChange={handleChange} value={newSearch} name="search" className={styles.searchInput} type="text" placeholder="Busca libros disponibles"/>
            <button type="submit" className={styles.searchButton}>
                <img src={find}></img>
            </button>
        </form>
  )
}

export default Search