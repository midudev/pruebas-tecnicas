import { useState, useEffect } from 'react'

export function useLocalStorage<T> (
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    const item = window.localStorage.getItem(key)
    return item !== null ? JSON.parse(item) : initialValue
  })

  const setValue = (value: T) => {
    setStoredValue(value)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === key && e.newValue !== e.oldValue) {
          setStoredValue(JSON.parse(e.newValue as string))
        }
      }

      window.addEventListener('storage', handleStorageChange)
      return () => {
        window.removeEventListener('storage', handleStorageChange)
      }
    }
  }, [key])

  return [storedValue, setValue]
}

export default useLocalStorage
