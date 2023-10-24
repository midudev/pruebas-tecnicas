import { useState, type Dispatch, useCallback, useEffect } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T): [T, Dispatch<T>] => {
  const getValueFromLocalStorage = useCallback<() => T>(() => {
    try {
      const storagedValue: T = JSON.parse(localStorage.getItem(key) as string)
      if (!storagedValue) {
        localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue
      }
      return storagedValue
    } catch (e: any) {
      console.log('There was an error reading the local storage', e)
      return initialValue
    }
  }, [key, initialValue])

  const [state, setState] = useState(getValueFromLocalStorage)

  const setValue = useCallback((value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      setState(value)
    } catch {
      console.log('There was an error on set the current value')
    }
  }, [])

  useEffect(() => {
    const onChangeStorage = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        setState(JSON.parse(e.newValue))
      }
    }
    window.addEventListener('storage', onChangeStorage)
    return () => window.removeEventListener('storage', onChangeStorage)
  }, [])

  return [state, setValue]
}
