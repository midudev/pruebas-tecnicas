import { useState, useEffect } from "react"


const useBooks = ()=>{

    const [books, setBooks]= useState([]);

    useEffect(()=>{
    
        fetchBook()
    },[])

    const fetchBook = async ()=>{
        try{
            const response = await fetch("../../../json/libros.json")
            const data = await response.json()
            setBooks(data.library)
        }
       catch(error){
        throw new Error('Error: ' + response.status)
       } finally{
        
       }
    }

const mappedBooks = books?.map( book => ({
    id: book.book.ISBN,
    title: book.book.title,
    pages: book.book.pages,
    genre: book.book.genre,
    cover: book.book.cover,
}))    
 
return [mappedBooks]

}

export default useBooks

