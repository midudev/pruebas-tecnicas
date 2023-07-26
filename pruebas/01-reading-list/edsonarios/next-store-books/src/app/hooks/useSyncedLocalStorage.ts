import { useEffect } from 'react'
import { useStore, State } from '@/app/store/store'

export const useSyncedLocalStorage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const oldLibrary = useStore.getState()

      const handleStorageChange = async (event: StorageEvent) => {
        if (event.key === 'library-storage' && event.newValue !== null) {
          const newState = JSON.parse(event.newValue)
          const newLibrary = newState?.state as State
          if (newLibrary !== undefined) {
            if (newLibrary.selectedGenre !== oldLibrary.selectedGenre ||
                oldLibrary.selectedBooks.length !== newLibrary.selectedBooks.length) {
              await useStore.persist.rehydrate()
            }
          }
        }
      }

      window.addEventListener('storage', handleStorageChange)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
      }
    }
  }, [])
}
