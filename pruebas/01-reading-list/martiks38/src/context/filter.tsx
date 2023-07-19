'use client'

import { allGenre, nameStorage } from '@/assets/constants'
import { createContext, useState } from 'react'

type FilterProviderProps = {
  children: JSX.Element | JSX.Element[]
}

type FilterModifiers = {
  modifiers: {
    changeNumberPages: (ev: React.ChangeEvent<HTMLInputElement>) => void
    changeCurrentGenre: (ev: React.MouseEvent<HTMLButtonElement>) => void
  }
}

const currentGenre = window.localStorage.getItem(nameStorage.currentGenre) ?? allGenre

const initialFilters = {
  currentGenre,
  numberPages: Infinity
}

export const FilterContext = createContext<(typeof initialFilters & FilterModifiers) | null>(null)

export function FilterProvider({ children }: FilterProviderProps) {
  const [filters, setFilters] = useState(initialFilters)

  const changeNumberPages = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const numberPages = Number(ev.currentTarget.value)
    const isNumber = !isNaN(numberPages)

    if (isNumber) setFilters((prevFilters) => ({ ...prevFilters, numberPages }))
  }

  const changeCurrentGenre = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const { genre } = ev.currentTarget.dataset

    if (genre) {
      window.localStorage.setItem(nameStorage.currentGenre, genre)

      setFilters((prevFilters) => ({ ...prevFilters, currentGenre: genre }))
    }
  }

  const values = {
    ...filters,
    modifiers: {
      changeNumberPages,
      changeCurrentGenre
    }
  }

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
}
