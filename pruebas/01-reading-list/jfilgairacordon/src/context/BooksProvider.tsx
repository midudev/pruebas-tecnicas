import React, { createContext } from 'react'
import { useStore } from '../hooks/useStore'
import { type BooksContextType } from '../types'

export const BooksContext = createContext<BooksContextType | null>(null)

interface Props { children: React.ReactNode }
export const BooksProvider = ({ children }: Props) => {
  const state = useStore()

  return (
    <BooksContext.Provider value={state}>
      {children}
    </BooksContext.Provider>
  )
}
