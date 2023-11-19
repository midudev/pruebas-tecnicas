import { useContext } from 'react'
import { ReadingListContext } from '@/contexts/reading-list'

export function useReadingList() {
  const context = useContext(ReadingListContext)

  if (context === undefined) {
    throw new Error('useReadingList must be used within a ReadingListProvider')
  }

  return context
}
