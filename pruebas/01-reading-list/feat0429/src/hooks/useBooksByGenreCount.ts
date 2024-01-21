import { useBoundStore } from '../store/bound-store'
import { countBooksByGenre } from '../utils'
import { useState, useRef, useEffect } from 'react'
import { Genre } from '../constants/genres'
import { useTransition } from '@react-spring/web'

export function useBooksByGenreCount () {
  const readingList = useBoundStore(state => state.booksInList)
  const genreFilter = useBoundStore(state => state.genreFilter)
  const availableBooks = useBoundStore(state => state.availableBooks)

  const [isCounterShown, setIsCounterShown] = useState<boolean>(false)

  const totalAvailableBooksByGenreCount = countBooksByGenre(availableBooks, genreFilter)
  const readingListBooksByGenreCount = countBooksByGenre(readingList, genreFilter)
  const currentAvailableBooksByGenreCount = totalAvailableBooksByGenreCount - readingListBooksByGenreCount

  const genreDisplayed = useRef<Genre>(genreFilter)
  const genreCountDisplayed = useRef<number>(currentAvailableBooksByGenreCount)

  const isGenreAll = genreFilter === Genre.All

  const countTransition = useTransition(isCounterShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  useEffect(() => {
    if (!isGenreAll) {
      setIsCounterShown(true)
      genreDisplayed.current = genreFilter
      genreCountDisplayed.current = currentAvailableBooksByGenreCount
    } else {
      setIsCounterShown(false)
    }
  }, [genreFilter, currentAvailableBooksByGenreCount])

  return {
    countTransition,
    currentAvailableBooksByGenreCount,
    totalAvailableBooksByGenreCount,
    genreDisplayed,
    genreCountDisplayed,
    isGenreAll
  }
}
