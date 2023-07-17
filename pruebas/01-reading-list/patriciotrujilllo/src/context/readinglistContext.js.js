import { createContext,useState } from "react"

export const ReadingContext = createContext()


const initialState = JSON.parse(window.localStorage.getItem('bookToRead')) || []

const updateLocatStorage = newBooksToRead =>{
    window.localStorage.setItem('bookToRead',JSON.stringify(newBooksToRead))
}

export const ReadingProvider = ({children}) =>{
    const [read,setRead] = useState(initialState)

    const addtoToListRead = book =>{
        
        const indexFind = read.findIndex(item=> item.ISBN===book.ISBN)

        if(indexFind===-1){
            const newList = [...read,book]
            updateLocatStorage(newList)
            setRead(newList)
            
        }
    } 
    const removeToListRead = book =>{
        const newList = read.filter(item=> item.ISBN!==book.ISBN)
        updateLocatStorage(newList)
        setRead(newList)
        
    }
    return(
        <ReadingContext.Provider value={{
            read,
            addtoToListRead,
            removeToListRead
        }}>
            {children}
        </ReadingContext.Provider>
    )
}