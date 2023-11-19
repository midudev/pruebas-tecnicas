import { createContext } from 'react'
import { useReadingListContext } from '@/hooks/use-reading-list-context'

const STORAGE_KEY = 'readingList'

export const ReadingListContext = createContext<
  ReturnType<typeof useReadingListContext> | undefined
>(undefined)

interface Props {
  children: React.ReactNode
  storageKey?: string
}

export default function ReadingListProvider({
  children,
  storageKey = STORAGE_KEY
}: Props) {
  const readingListContext = useReadingListContext(storageKey)

  return (
    <ReadingListContext.Provider value={readingListContext}>
      {children}
    </ReadingListContext.Provider>
  )
}
