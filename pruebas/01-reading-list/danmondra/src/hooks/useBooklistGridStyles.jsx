import { useRef, useState, useEffect } from 'react'
import { DESKTOP_LARGE_DEVICE_SIZE } from '../constants/globals'

export function useBooklistGridStyles({ books }) {
  const elementToApply = useRef(null)
  const [styles, setStyles] = useState({
    rows: 'repeat(0, 0)',
    opacity: '0'
  })

  // TODO --- not only calculate the rows, also do it with de columns
  const calculateRows = () => {
    if (window.innerWidth < DESKTOP_LARGE_DEVICE_SIZE) return '5rem'
    const columns = 6
    const rows = Math.ceil(books.length / columns)

    // TODO --- This works but isn't the best way, beacuse the "elementToApply"
    // is created before this will be executed, instead, we should
    // use "useCallback" to listen when the elementToApply exists
    // research as callback-ref.
    const containerHeight = elementToApply.current.offsetHeight

    return `repeat(${rows}, ${containerHeight / columns}px)`
  }

  useEffect(() => {
    if (!books.length) return

    setStyles({
      rows: calculateRows(),
      opacity: 1
    })
  }, [books])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setStyles({
        rows: calculateRows(),
        opacity: 1
      })
    })
  }, [])

  return { elementToApply, rows: styles.rows, opacity: styles.opacity }
}
