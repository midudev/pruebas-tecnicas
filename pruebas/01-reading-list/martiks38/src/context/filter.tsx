'use client'

import { createContext, useState } from 'react'
import { useBookList } from '@/hooks/useBookList'

import { allGenre, nameStorage } from '@/assets/constants'

type FilterProviderProps = {
  children: JSX.Element | JSX.Element[]
}

type FilterContext = {
  filters: {
    range: {
      currentNumberPages: number
      maxNumberPages: number
      step: number
    }
    currentGenre: string
  }
  modifiers: {
    changeNumberPages: (ev: React.ChangeEvent<HTMLInputElement>) => void
    changeCurrentGenre: (ev: React.MouseEvent<HTMLButtonElement>) => void
  }
}

const currentGenre = window.localStorage.getItem(nameStorage.currentGenre) ?? allGenre

const STEPS: readonly [number, number, number] = [100, 50, 10]

export const FilterContext = createContext<FilterContext | null>(null)

export function FilterProvider({ children }: FilterProviderProps) {
  const { listBooksAvailable, readingList } = useBookList()
  const [filters, setFilters] = useState(() => {
    const pages: number[] = [...listBooksAvailable, ...readingList].map(({ pages }) => pages)
    const maxNumberPages = Math.max(...pages)

    /**
     * Objective: maintain uniformity of input steps.
     * If the input:range step were 50 for a 1200 page book, the input would have 24 steps. And for one of 200 pages it will only have 4.
     * Look for the step to be at least 10 pages.
     */
    const step = STEPS.find((step) => maxNumberPages / step >= 10) || STEPS[2]

    return {
      range: { currentNumberPages: maxNumberPages, maxNumberPages, step },
      currentGenre
    }
  })

  const changeNumberPages = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const currentNumberPages = Number(ev.currentTarget.value)
    const isNumber = !isNaN(currentNumberPages)

    if (isNumber)
      setFilters((prevFilters) => {
        const prevFiltersCpy = structuredClone(prevFilters)
        prevFiltersCpy.range.currentNumberPages = currentNumberPages

        return prevFiltersCpy
      })
  }

  const changeCurrentGenre = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const { genre } = ev.currentTarget.dataset

    if (genre) {
      window.localStorage.setItem(nameStorage.currentGenre, genre)

      setFilters((prevFilters) => {
        const prevFiltersCpy = structuredClone(prevFilters)
        prevFiltersCpy.currentGenre = genre

        return prevFiltersCpy
      })
    }
  }

  const values = {
    filters,
    modifiers: {
      changeNumberPages,
      changeCurrentGenre
    }
  }

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
}
