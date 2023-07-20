import { createContext, useState, useEffect } from 'react'

export const ReadingListContext = createContext()

export function ReadingListProvider ({ children }) {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  )
  useEffect(() => {
    // Guardar el estado en el localStorage cada vez que cambie.
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  useEffect(() => {
    // Event listener para detectar cambios en el localStorage en otras pestañas
    const handleStorageChange = (event) => {
      if (event.key === 'list') {
        setList(JSON.parse(event.newValue))
      }
    }

    // Agregar el event listener al montar el componente
    window.addEventListener('storage', handleStorageChange)

    // Importante: limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, []) // No necesitamos dependencias aquí, ya que solo queremos agregar el event listener una vez
  const addToList = book => {
    const bookInListIndex = list.findIndex(item => item.book.ISBN === book.book.ISBN)
    console.log(bookInListIndex)
    if (bookInListIndex >= 0) {
      return
    }
    setList(prevState => ([
      ...prevState,
      {
        ...book
      }
    ]))
  }
  const removeFromList = book => {
    setList(prevState => prevState.filter(item => item.book.ISBN !== book.book.ISBN))
  }
  const clearList = () => {
    setList([])
  }
  return (
    <ReadingListContext.Provider value={{
      list,
      addToList,
      removeFromList,
      clearList
    }}>
        {children}
    </ReadingListContext.Provider>
  )
}
