import { useState } from 'react'
import { getThePagesNumber } from '../services/getThePagesNumber'

export function usePagesNumber () {
  const [pagesNumber, setPagesNumber] = useState([])

  useState(() => {
    getThePagesNumber().then((resp) => setPagesNumber(resp))
  }, [])

  return {
    pagesNumber
  }
}
