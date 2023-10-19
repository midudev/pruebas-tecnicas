import { createContext, useEffect, useState } from 'react'
import { $ } from '../utils'
const DEFAULT_SCROLL = 0

export const RouterScrollContext = createContext()

export function RouterScrollProvider({ children }) {
  const currentPathName = window.location.pathname.slice(1)
  const [currentPath, setCurrentPath] = useState(currentPathName)

  useEffect(() => {
    const $elementToScroll = $('#elementToScroll')
    const $elementTarget = $(`#${currentPath}`)
    const offsetLeft = $elementTarget?.offsetLeft

    $elementToScroll.scrollTo({
      top: 0,
      left: offsetLeft || DEFAULT_SCROLL,
      behavior: 'smooth'
    })
  }, [currentPath])

  const handleCurrentPath = (path) => {
    setCurrentPath(path)
  }

  return (
    <RouterScrollContext.Provider
      value={{
        handleCurrentPath,
        currentPath
      }}
    >
      {children}
    </RouterScrollContext.Provider>
  )
}
