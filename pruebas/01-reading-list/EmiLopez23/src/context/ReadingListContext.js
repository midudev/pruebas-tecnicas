import { createContext, useContext, useEffect, useState } from "react"

export const readingListContext = createContext()

export function useReadingListContext() {
    return useContext(readingListContext);
  }

const READING_LIST = 'toRead'
export function ReadingListProvider({children}){
    const [booksToRead,setBooksToRead] = useState( JSON.parse(localStorage.getItem(READING_LIST)) || [])
    
    useEffect(()=>{
        function handleStorageChange(event){
            if(event.key===READING_LIST){
                const newArray = JSON.parse(event.newValue)
                setBooksToRead(newArray)
            } 
        }
    
        window.addEventListener('storage',handleStorageChange)

        return ()=> window.removeEventListener('storage',handleStorageChange)
    },[])

    function addBook(book){
        const actualBookArray = JSON.parse(localStorage.getItem(READING_LIST))
        const newBooksArray = actualBookArray ? [...actualBookArray,book] : [book]
        localStorage.setItem(READING_LIST,JSON.stringify(newBooksArray))
        setBooksToRead(newBooksArray)
    }

    function removeBook(bookCode){
        const newBooksArray = JSON.parse(localStorage.getItem(READING_LIST)).filter(book=>book.ISBN!==bookCode)
        localStorage.setItem(READING_LIST,JSON.stringify(newBooksArray))
        setBooksToRead(newBooksArray)
    }

    return <readingListContext.Provider value={{booksToRead,addBook,removeBook}}>
        {children}
    </readingListContext.Provider>
}