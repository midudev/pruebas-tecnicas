import { createContext, useEffect, useRef, useState } from 'react'
import { $ } from '../utils'
const DEFAULT_SCROLL = 0
const DEFAULT_TARGET = '/'

export const RouterScrollContext = createContext()

export function RouterScrollProvider({ children }) {
  const currentPathName = window.location.pathname.slice(1)
  const [currentPath, setCurrentPath] = useState(currentPathName)
  const isFirstRender = useRef(true)

  useEffect(() => {
    window.history.pushState({}, '', currentPath || DEFAULT_TARGET)

    const $elementToScroll = $('#elementToScroll')
    const $elementTarget = $(`#${currentPath}`)
    const offsetLeft = $elementTarget?.offsetLeft

    $elementToScroll.scrollTo({
      top: 0,
      left: offsetLeft || DEFAULT_SCROLL,
      behavior: isFirstRender.current ? 'instant' : 'smooth'
    })
    if (isFirstRender.current) isFirstRender.current = false
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
