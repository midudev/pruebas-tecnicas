import { useEffect } from 'react'
import { useBooks } from './useBooks'
import { LOCAL_STORAGE_EVENT } from '../constants'
import { type Book, type BookFilters } from '../types'

type Props =
| {
  setReadList: (books: Book[]) => void
  setFilters: (filters: BookFilters) => void
  setSortReadListByPriority: (sort: boolean) => void
}

const dispatchStateActions = ({ setReadList, setFilters, setSortReadListByPriority }: Props) => {
  const storedFilters = localStorage.getItem('filters')
  if (storedFilters !== null) {
    const filters = JSON.parse(storedFilters) as BookFilters
    const { genre, pages, name } = filters
    setFilters({
      genre: genre ?? '',
      pages: pages ?? 0,
      name: name ?? ''
    })
  }

  const storedReadList = localStorage.getItem('readList')
  if (storedReadList !== null) {
    const readList = JSON.parse(storedReadList)
    setReadList(readList)
  }

  const storedSortReadListByPriority = localStorage.getItem('sortReadListByPriority')
  if (storedSortReadListByPriority !== null) {
    const sortReadListByPriority = JSON.parse(storedSortReadListByPriority)
    setSortReadListByPriority(sortReadListByPriority)
  }
}

export function useLocalStorageSync () {
  const {
    setFilters,
    setReadList,
    setSortReadListByPriority
  } = useBooks()

  useEffect(() => {
    dispatchStateActions({ setReadList, setFilters, setSortReadListByPriority })

    // Escuchamos cambios en el localStorage
    window.addEventListener(LOCAL_STORAGE_EVENT, () => {
      dispatchStateActions({ setReadList, setFilters, setSortReadListByPriority })
    })
  }, [])
}
