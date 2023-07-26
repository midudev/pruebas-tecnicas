import { createContext, useEffect, useState } from 'react';


// se crea el contexto.
export const ReadingListContext = createContext ()


//se provee el contexto.
export function ReadingListProvider ({children}) {

    // Cargamos la lista de lectura almacenada en localStorage al inicializar la aplicación.
    const [readingList, setReadingList] = useState(() => {
        const storedReadingList = localStorage.getItem('readingList')
        return storedReadingList ? JSON.parse(storedReadingList) : []
      })

  //añade un nuevo libro a la lista de lectura.
    const addReadingList = book =>{
        setReadingList( prevState =>([
            ...prevState,
            {
                ...book
            }
        ]))
    }
    //elimina un libro de la lista de lectura.
    const clearReadingList = books=>{
        setReadingList(prevState => prevState.filter(book =>  book.book.ISBN !== books))
    }

    useEffect(() => {
         // Escuchamos el evento 'storage' en otras pestañas para recibir cambios desde ellas
    const handleStorageEvent = (event) => {
        // Verificamos si el evento corresponde a cambios en la clave 'readingList'
        if (event.key === 'readingList' && event.newValue !== null) {
        // Actualizamos el estado local 'readingList' con los datos recibidos
          setReadingList(JSON.parse(event.newValue))
        }
      };
      // Agregamos el evento 'storage' para escuchar cambios en otras pestañas
      window.addEventListener('storage', handleStorageEvent)
      
      // Eliminamos el evento 'storage' al desmontar el componente
      return () => {
        window.removeEventListener('storage', handleStorageEvent)
      };
    }, [readingList])

    return(
        <ReadingListContext.Provider value={{
            readingList,
            addReadingList,
            clearReadingList
        }}>
            {children}
        </ReadingListContext.Provider>
    )
}