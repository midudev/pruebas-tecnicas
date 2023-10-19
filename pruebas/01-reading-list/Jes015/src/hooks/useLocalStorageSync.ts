import { useLibraryStore } from '@/store/Library.store'
import { type TWrapedBooks } from '@/types'
import { useEffect } from 'react'

export const useLocalStorageSync = () => {
  const syncStateLocalStoage = useLibraryStore((state) => state.syncStateLocalStoage)
  useEffect(() => {
    const onStorageEvent = (event: StorageEvent) => {
      if (event.storageArea === localStorage) {
        if (event.newValue == null) return
        const { avaibleBooks, readList }: { avaibleBooks: TWrapedBooks, readList: TWrapedBooks } = JSON.parse(event.newValue).state
        syncStateLocalStoage(avaibleBooks, readList)
      }
    }
    window.addEventListener('storage', onStorageEvent)

    return () => {
      window.removeEventListener('storage', onStorageEvent)
    }
  }, [])
}
