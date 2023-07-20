import { createContext, useContext, useEffect, useState } from "react";
import BooksData from "../books.json"

export const AvailableBooksContext = createContext()

export function useAvailableBooksContext() {
    return useContext(AvailableBooksContext);
  }

const AVAILABLE_BOOKS = 'availableBooks'

export function AvailableBooksProvider({children}){
    const [availableBooks,setAvailableBooks] = useState(JSON.parse(localStorage.getItem(AVAILABLE_BOOKS)) || BooksData.library)

    useEffect(()=>{
        function handleStorageChange(event){
            if(event.key===AVAILABLE_BOOKS){
                setAvailableBooks(JSON.parse(event.newValue))
            } 
        }
    
        window.addEventListener('storage',handleStorageChange)

        return ()=> window.removeEventListener('storage',handleStorageChange)
    },[])

    function filterByGenre(wantedGenre){
        (wantedGenre==="")
        ? setAvailableBooks(BooksData.library)
        : setAvailableBooks(BooksData.library.filter(book=>book.book.genre === wantedGenre))
    }

    function filterByTitle(bookName){
        setAvailableBooks(BooksData.library.filter(book=>book.book.title.toLowerCase().includes(bookName.toLowerCase())))
    }

    function removeBookFromAvailable(bookCode){
        const newArray = availableBooks.filter(book=>book.book.ISBN !== bookCode)
        setAvailableBooks(newArray)
        localStorage.setItem(AVAILABLE_BOOKS,JSON.stringify(newArray))
    }

    function addBookToAvailable(book){
        const newArray = [...availableBooks,{book:book}]
        setAvailableBooks(newArray)
        localStorage.setItem(AVAILABLE_BOOKS,JSON.stringify(newArray))
    }


    return <AvailableBooksContext.Provider value={{availableBooks,filterByGenre,filterByTitle,removeBookFromAvailable,addBookToAvailable}}>
        {children}
    </AvailableBooksContext.Provider>
}