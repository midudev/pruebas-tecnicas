import { useEffect } from 'react'

export function useSyncStorage<SyncValueType>(
  storageKey: string,
  storageDefaultValue: SyncValueType,
  syncCallback: (value: SyncValueType) => void
) {
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === storageKey) {
        const newStorageValue = JSON.parse(
          event.newValue ?? JSON.stringify(storageDefaultValue)
        ) as SyncValueType

        syncCallback(newStorageValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [storageKey, storageDefaultValue, syncCallback])
}
