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

    function handleFilters(filters) {
        return availableBooks.filter(({ book }) => {
          if (filters.genre && filters.title) {
            return book.genre === filters.genre && book.title.toLowerCase().includes(filters.title.toLowerCase());
          }
          else if (filters.genre) {
            return book.genre === filters.genre;
          }
          else if (filters.title) {
            return book.title.toLowerCase().includes(filters.title.toLowerCase());
          }
          return true;
        });
      }
      

    function removeBookFromAvailable(bookCode){
        const newArray = availableBooks.filter(book=>book.book.ISBN !== bookCode)
        setAvailableBooks(newArray)
        localStorage.setItem(AVAILABLE_BOOKS,JSON.stringify(newArray))
    }

    function addBookToAvailable(book){
        const newArray = [...JSON.parse(localStorage.getItem(AVAILABLE_BOOKS)),{book:book}]
        setAvailableBooks(newArray)
        localStorage.setItem(AVAILABLE_BOOKS,JSON.stringify(newArray))
    }


    return <AvailableBooksContext.Provider value={{availableBooks,removeBookFromAvailable,handleFilters,addBookToAvailable}}>
        {children}
    </AvailableBooksContext.Provider>
}