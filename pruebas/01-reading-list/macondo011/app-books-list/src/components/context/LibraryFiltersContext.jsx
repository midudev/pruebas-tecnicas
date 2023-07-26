import React, { createContext, useEffect, useState } from 'react'

// se crea el contexto.
export const LibraryFiltersContext = createContext()

// se provee el contexto.
export const LibraryFiltersProvider = ({ children }) => {

  const [filters, setFilters] = useState(() => {
    const storedFilters = localStorage.getItem('filters')
    return storedFilters ? JSON.parse(storedFilters) : {
      genre: 'all',
      minPages: 10
    }
  })

  useEffect(() => {
    // Escuchamos el evento 'storage' para recibir cambios de otras pestañas
    const handleStorageEvent = (event) => {
      // Verificamos si el evento corresponde a cambios en la clave 'filters'
      if (event.key === 'filters' && event.newValue !== null) {
        // Actualizamos el estado local 'filters' con los datos recibidos
        setFilters(JSON.parse(event.newValue))
      }
    }

    // Agregamos el evento 'storage' para escuchar cambios en otras pestañas
    window.addEventListener('storage', handleStorageEvent)

    // Eliminamos el evento 'storage' al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageEvent)
    }
  }, []) // No es necesario depender de 'filters', ya que no queremos que esta función se vuelva a ejecutar si 'filters' cambia

  useEffect(() => {
    // Guardamos los cambios en los filtros en localStorage cada vez que cambie
    localStorage.setItem('filters', JSON.stringify(filters))
  }, [filters])
  
    return (
      <LibraryFiltersContext.Provider value={{
        filters,
        setFilters
      }}>
        {children}
      </LibraryFiltersContext.Provider>
    )
  }
   
 