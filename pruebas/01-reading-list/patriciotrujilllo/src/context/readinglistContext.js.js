import { createContext,useState } from "react"

export const ReadingContext = createContext()

export const ReadingProvider = ({children}) =>{
    const [read,setRead] = useState([])

    const addtoToListRead = book =>{
        
        const indexFind = read.findIndex(item=> item.ISBN===book.ISBN)

        if(indexFind===-1){
            setRead([...read,book])
        }
    } 
    const removeToListRead = book =>{
        setRead(prevState=>prevState.filter(item=> item.ISBN!==book.ISBN))
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