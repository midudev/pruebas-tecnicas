import { useEffect, useState } from 'react'
import { useBookContext } from '../hooks/useBookContext'

function SelectFilter () {
  const [genre, setGenre] = useState([])
  const { book } = useBookContext()

  useEffect(() => {
    genreFilter()
  }, [])

  const genreFilter = () => {
    const uniqueGenres = [...new Set(book.map((item) => item.book.genre))]
    setGenre(uniqueGenres)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
        <form className='text-black'>
            <select onChange={handleChange}>
                <option defaultValue=''>Select a genre</option>
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
