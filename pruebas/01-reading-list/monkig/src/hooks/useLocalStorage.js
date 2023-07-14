import { useEffect } from 'react'
export default function useLocalStorage (item, setState) {
  useEffect(() => {
    if (item) {
      const localStorageData = localStorage.getItem(item)
      if (localStorageData) {
        setState(JSON.parse(localStorageData))
      }
    }
  }, [])
}
