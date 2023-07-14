import { useEffect, useState } from 'react'
import { useBookContext } from '../hooks/useBookContext'

function SelectFilter () {
  const [genre, setGenre] = useState([])
  const { book, setFilterGenre, filterGenre } = useBookContext()

  useEffect(() => {
    genreFilter()
  }, [])

  const genreFilter = () => {
    const uniqueGenres = [...new Set(book.map((item) => item.book.genre))]
    setGenre(uniqueGenres)
  }

  const handleChange = (e) => {
    setFilterGenre(e.target.value)
  }

  return (
        <form className='text-black'>
            <select onChange={handleChange} value={filterGenre || ''}>
                <option value=''>Select a genre</option>
                {
                    genre.map((genre, index) => (
                        <option value={genre} key={index}>{genre}</option>
                    ))
                }
            </select>
        </form>
  )
}

export { SelectFilter }
