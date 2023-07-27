'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { FiltersContext } from '@/contexts/FiltersContext'
import type { Filters } from '@/utils/types'
import { getBooks } from '@/utils/services'
import { useBooks } from '@/hooks/useBooks'

export default function FiltersProvider({children}: {children: ReactNode}){
  const [filters, setFilters] = useState<Filters>({})
  const { updateBooks } = useBooks()
  
  useEffect(()=> {
    updateBooks(getBooks().filter(f=> {
      const gender = filters.gender ? f.genre.toLowerCase() == filters.gender : true
      const pages = filters.pages ? f.pages >= filters.pages : true
      const title = filters.title ? (f.title == filters.title || f.title.toLowerCase().includes(filters.title.toLowerCase())) : true

      return gender && pages && title
    }))
  }, [filters])
  
  return (
    <>
      <FiltersContext.Provider value={{
        filters,
        updateFilters(updatedFilters) {
          setFilters(f=> ({...f, ...updatedFilters}))
        },
      }}>
        {children}
      </FiltersContext.Provider>
    </>
  )
}