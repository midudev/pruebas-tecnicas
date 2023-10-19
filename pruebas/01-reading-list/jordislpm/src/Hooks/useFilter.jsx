import { useState, useEffect, useContext } from "react"
import { BooksAvailable } from "../context/contextBooks";
import { FiltersContext } from "../context/contextFilters";


function useFilter(){

const [store, dispatch] = useContext(BooksAvailable);
const [filters, setFilters]=useContext(FiltersContext)  
const {listBooks, listRead} = store;
const [books, setBooks]=useState(listBooks)
const [read,setRead]=useState(listRead)


useEffect(()=>{
    const filterBooks = store.listBooks.filter((book)=>{
        return(
            book.pages >= filters.minPages &&(
                filters.genre === "Todas" ||
                book.genre === filters.genre
            )&& (
                filters.search === "" ||
                (book.title.toLowerCase()).includes(filters.search.toLowerCase())
            )
        )
    })

    const filterRead = store.listRead.filter((book)=>{
        return(
            book.pages >= filters.minPages &&(
                filters.genre === "Todas" ||
                book.genre === filters.genre
            )
        )
    })

    setBooks(filterBooks)
    setRead(filterRead)
},[store,filters])



return {books, read, setFilters}
}


export default useFilter