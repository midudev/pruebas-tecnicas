'use client'

import { useState, type ReactNode } from 'react'
import { OrganizeContext } from '@/contexts/OrganizeContext'
import type { Organize } from '@/utils/types'

export default function OrganizeProvider({children}: {children: ReactNode}){
  const [organize, setOrganize] = useState<Organize>()
  
  return (
    <>
      <OrganizeContext.Provider value={{
        organize,
        updateOrganize(updatedOrganize) {
          setOrganize(updatedOrganize)
        },
      }}>
        {children}
      </OrganizeContext.Provider>
    </>
  )
}