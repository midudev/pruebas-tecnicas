import { useEffect, useState } from 'react'

export const useChangeStore = () => {
  const [change, setChange] = useState(0)

  useEffect(() => {
    const event = () => {
      setChange((prev) => prev + 1)
    }

    window.addEventListener('storage', event)

    return () => {
      window.removeEventListener('storage', event)
    }
  }, [])

  return { change }
}
