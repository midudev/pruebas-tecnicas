import { useEffect, useState } from 'react'
import type { Book as BookType } from '../type.d.ts'
import { useBoundStore } from '../store/bound-store'
import { SLIDER_CONFIG } from '../constants/element-config.ts'

export function useSlider () {
  const availableBooks = useBoundStore(state => state.availableBooks)

  const [currentIndex, setCurrentIndex] = useState<number>(3)
  const [currentBook, setCurrentBook] = useState<BookType>(availableBooks[currentIndex])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setIsLoaded(false)
      // A timeout is set to leave time for the transition to end
      // before changing the current displayed book
      setTimeout(() => {
        if (currentIndex === availableBooks.length - 1) {
          setCurrentBook(availableBooks[0])
          setCurrentIndex(0)
        } else {
          setCurrentBook(availableBooks[currentIndex + 1])
          setCurrentIndex(currentIndex + 1)
        }
      }, SLIDER_CONFIG.TRANSITION_TIMEOUT)
    }, SLIDER_CONFIG.AUTO_PLAY_INTERVAL)
    return () => { clearInterval(autoPlayInterval) }
  })

  return {
    currentBook,
    isLoaded,
    setIsLoaded
  }
}
