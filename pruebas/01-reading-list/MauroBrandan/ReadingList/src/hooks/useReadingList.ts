import { useContext } from 'react'
import { ReadingListContextType } from '../types'
import { ReadingListContext } from '../contexts/readingList'

export function useReadingList () {
  const context = useContext(ReadingListContext) as ReadingListContextType

  if (context === undefined) {
    throw new Error('useReadingList must be used within a ReadingListProvider')
  }

  return context
}
