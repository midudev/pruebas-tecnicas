import { useEffect } from 'react'
import { useStore } from '../store/bookStore'
useStore

const handleRehydrate = async () => {
  await useStore.persist.rehydrate()
}
export function useSync() {
  useEffect(() => {
    window.addEventListener('storage', (event) => {
      if (event.key === 'book-storage') {
        // const newBooks = JSON.parse(event.newValue)

        handleRehydrate()
      }
      console.log(event)
    })

    return () => {
      console.log('ad')
    }
  }, [])
}
