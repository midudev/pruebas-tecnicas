import { useState } from 'react'

export function useWindows () {
  const [displayReadList, setDisplayReadList] = useState(false)
  const [displayFilters, setDisplayFilters] = useState(false)

  function toggleReadList () {
    const newState = !displayReadList
    setDisplayReadList(newState)

    if (newState && displayFilters) {
      setDisplayFilters(!displayFilters)
    }
  }

  function toggleFilters () {
    const newState = !displayFilters
    setDisplayFilters(newState)

    if (newState && displayReadList) {
      setDisplayReadList(!displayReadList)
    }
  }

  return { displayReadList, displayFilters, toggleReadList, toggleFilters }
}
