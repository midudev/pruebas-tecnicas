import { useEffect, useState } from 'react'

export const useDebounce = <T>({ value, delay }: { value: T, delay: number }) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => { setDebounceValue(value) }, delay)

    return () => { clearTimeout(timer) }
  }, [setDebounceValue, delay, value])

  return { debounceValue }
}
