import { useEffect, useState } from 'react'
import { useBoundStore } from '../store/bound-store.ts'
import { useTransition } from '@react-spring/web'

export function useReadingListBookTransition () {
  const readingList = useBoundStore(state => state.booksInList)
  const isReadingListMounted = useBoundStore(state => state.isReadingListMounted)
  const [isListDisplayed, setListDisplayed] = useState<boolean>(readingList.length > 0)

  useEffect(() => {
    if (readingList.length < 1) {
      setTimeout(() => {
        setListDisplayed(false)
      }, 500)
      return
    }
    setListDisplayed(true)
  }, [readingList.length])

  const transitions = useTransition(readingList, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1, height: '260px' },
    leave: {
      opacity: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      height: '0px'
    }
  })

  return {
    isReadingListMounted,
    isListDisplayed,
    transitions
  }
}
