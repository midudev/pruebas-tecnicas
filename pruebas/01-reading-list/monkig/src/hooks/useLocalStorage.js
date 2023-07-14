import { useEffect, useState } from 'react'
export default function useLocalStorage (item) {
  const [data, setData] = useState([])

  useEffect(() => {
    if (item) {
      const localStorageData = localStorage.getItem(item)
      if (localStorageData) {
        setData(JSON.parse(localStorageData))
      }
    }
  }, [])

  return [data, setData]
}
