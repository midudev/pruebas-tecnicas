import { useState } from 'react'

export default function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const value = window.localStorage.getItem(key)
    if (value) return JSON.parse(value)
    else window.localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue
  })
  function setValue (value) {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return [
    storedValue,
    setValue
  ]
}
