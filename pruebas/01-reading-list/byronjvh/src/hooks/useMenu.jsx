import { useEffect, useRef, useState } from 'react'

export function useMenu () {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const updateOpen = (bool) => {
    setOpen(bool)
  }

  return { open, updateOpen, menuRef }
}
