'use client'

import { useState, type ReactNode } from 'react'
import { FiltersContext } from '@/contexts/FiltersContext'
import type { Filters } from '@/utils/types'

export default function FiltersProvider({children}: {children: ReactNode}){
  const [filters, setFilters] = useState<Filters>({})
  
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