import { createContext, useState, useEffect } from "react"

export const ReadingContext = createContext()


const initialState = JSON.parse(window.localStorage.getItem('bookToRead')) || []

const updateLocatStorage = newBooksToRead => {
    window.localStorage.setItem('bookToRead', JSON.stringify(newBooksToRead))
}

export const ReadingProvider = ({ children }) => {
    const [read, setRead] = useState(initialState)

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "bookToRead") {
                setRead(JSON.parse(event.newValue));
            }
        };

        window.addEventListener("storage", handleStorageChange);
        //Se comenta por ahora, si da problemas de rendimineto o problema visual por referencia
        // return () => {
        //     window.removeEventListener("storage", handleStorageChange);
        // }
    }, []);

    const addtoToListRead = book => {

        const indexFind = read.findIndex(item => item.ISBN === book.ISBN)

        if (indexFind === -1) {
            const newList = [...read, book]
            updateLocatStorage(newList)
            setRead(newList)

        }
    }
    const removeToListRead = book => {
        const newList = read.filter(item => item.ISBN !== book.ISBN)
        updateLocatStorage(newList)
        setRead(newList)

    }
    return (
        <ReadingContext.Provider value={{
            read,
            addtoToListRead,
            removeToListRead
        }}>
            {children}
        </ReadingContext.Provider>
    )
}