import { useCallback, useEffect, useState } from 'react'

export function useLocalStorage ({ nameStorage, initialValue = null }) {
  const [localState, setLocalState] = useState(null)

  const getLocalStorageValue = () => {
    const localStorageValue = globalThis.localStorage.getItem(nameStorage)
    if (localStorageValue) {
      return JSON.parse(localStorageValue)
    }
  }

  const saveLocalStorage = useCallback(({ value }) => {
    setLocalState(value)
    globalThis.localStorage.setItem(nameStorage, JSON.stringify(value))
  }, [nameStorage])

  const deleteLocalState = () => {
    setLocalState(null)
    globalThis.localStorage.removeItem(nameStorage)
  }

  const updateLocalState = ({ value }) => {
    if (typeof value === 'function') {
      return setLocalState((prevState) => value(prevState))
    }
    setLocalState(value)
  }

  const itemExists = useCallback(() => {
    return Boolean(globalThis.localStorage.getItem(nameStorage))
  }, [nameStorage])

  const syncStateFromLocalStorage = useCallback(() => {
    const urlFromLocalStorage = globalThis.localStorage.getItem(nameStorage)
    if (urlFromLocalStorage) {
      setLocalState(JSON.parse(urlFromLocalStorage))
    }
  }, [nameStorage])

  useEffect(() => {
    initialValue && !(itemExists()) && saveLocalStorage({ value: initialValue })
  }, [initialValue, itemExists, saveLocalStorage])

  useEffect(() => {
    syncStateFromLocalStorage()
  }, [nameStorage, syncStateFromLocalStorage])

  useEffect(() => {
    const handleStorageChanges = evt => {
      if (evt.key === nameStorage) {
        syncStateFromLocalStorage()
      }
    }
    globalThis.addEventListener('storage', handleStorageChanges)
    return () => { globalThis.removeEventListener('storage', handleStorageChanges) }
  }, [nameStorage, syncStateFromLocalStorage])

  return { localState, getLocalStorageValue, saveLocalStorage, deleteLocalState, updateLocalState, syncStateFromLocalStorage }
}
