import { useState } from 'react'

export function useActive () {
  const [toggle, setToggle] = useState(false)

  const changeToggle = () => {
    setToggle(!toggle)
  }

  return { toggle, changeToggle }
}
