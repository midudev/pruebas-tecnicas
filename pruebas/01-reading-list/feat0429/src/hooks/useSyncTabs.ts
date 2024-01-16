import { useEffect } from 'react'
import { useBoundStore } from '../store/bound-store'

export function useSyncTabs () {
  const refreshStore = () => {
    void useBoundStore.persist.rehydrate()
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', refreshStore)
    window.addEventListener('focus', refreshStore)

    return () => {
      document.removeEventListener('visibilitychange', refreshStore)
      window.removeEventListener('focus', refreshStore)
    }
  }, [])
}
