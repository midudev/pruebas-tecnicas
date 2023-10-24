import { useState, useEffect } from 'react'

export function useDebounce<T>(initialValue: T, delay: number): [T, (value: T) => void, T, (value: T) => void] {

  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  const [value, setValue] = useState(initialValue)

  useEffect(() => {

    const handler = setTimeout(() => {
      setValue(debouncedValue)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [debouncedValue, delay])

  return [value, setDebouncedValue, debouncedValue, setDebouncedValue];

}