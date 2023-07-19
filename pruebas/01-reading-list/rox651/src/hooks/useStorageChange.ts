import { useEffect } from 'react'
import { useLibraryStore } from '../store'

const useStorageChange = () => {
  useEffect(() => {
    const updateStore = async () => {
      await useLibraryStore.persist.rehydrate()
    }

    const eventChange = () => {
      updateStore().catch((e) => console.log(e))
    }

    document.addEventListener('visibilitychange', eventChange)
    window.addEventListener('focus', eventChange)

    return () => {
      document.removeEventListener('visibilitychange', eventChange)
      window.removeEventListener('focus', eventChange)
    }
  }, [])
}

export default useStorageChange
