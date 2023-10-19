import { useEffect, useState } from 'react'
import { useBookContext } from '../hooks/useBookContext'

function SelectFilter () {
  const [genre, setGenre] = useState([])
  const { book, setFilterGenre, filterGenre } = useBookContext()

  // cuando se renderiza el componente se ejecuta la funcion genreFilter
  useEffect(() => {
    genreFilter()
  }, [])

  const genreFilter = () => {
    // obtengo todos los generos de los libros sin repetirlos y los guardo en un array
    const uniqueGenres = [...new Set(book.map((item) => item.book.genre))]
    setGenre(uniqueGenres)
  }

  // cuando cambie el valor del select se setea el valor a filterGenre
  const handleChange = (e) => {
    setFilterGenre(e.target.value)
  }

  return (
    <select onChange={handleChange} value={filterGenre || ''}>
      <option value=''>Select a genre</option>
      {
        genre.map((genre, index) => (
          <option value={genre} key={index}>{genre}</option>
        ))
      }
    </select>
  )
}

export { SelectFilter }
