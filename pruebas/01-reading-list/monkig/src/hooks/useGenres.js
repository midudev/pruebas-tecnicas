import { parseredBooks } from './useBooks'
import { useState, useEffect } from 'react'

export default function useGenres () {
  const allGenres = parseredBooks.map(book => book.genre)
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const uniqueGenres = allGenres.filter((genre, index, self) => self.indexOf(genre) === index)
    setGenres(uniqueGenres)
  }, [])

  return { genres }
}
