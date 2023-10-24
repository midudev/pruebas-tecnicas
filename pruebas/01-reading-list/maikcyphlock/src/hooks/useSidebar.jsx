import { createContext, useState } from 'react'

export const SidebarContext = createContext(null)

export default function SidebarProvider ({ children }) {
  const [isVisible, setIsVisible] = useState(false)

  function setVisible () {
    setIsVisible(!isVisible)
  }
  return (
        <SidebarContext.Provider value={[isVisible, setVisible]}>
            {children}
        </SidebarContext.Provider>
  )
}
