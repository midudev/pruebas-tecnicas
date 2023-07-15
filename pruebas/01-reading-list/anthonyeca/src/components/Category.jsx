import { useEffect } from 'react'
import './Category.css'

/* eslint-disable react/prop-types */
export const Category = ({
  activeGenre,
  setActiveGenre,
  library,
  setFiltered,
}) => {
  useEffect(() => {
    if (activeGenre === '') {
      setFiltered(library)
      return
    }
    const filtered = library.filter((el) => el.book.genre.includes(activeGenre))
    setFiltered(filtered)
  }, [activeGenre])

  return (
    <div className="category-container">
      <button onClick={() => setActiveGenre('')} className="button-28">
        All
      </button>
      <button
        onClick={() => setActiveGenre('Ciencia ficción')}
        className="button-28"
      >
        Ciencia ficción
      </button>
      <button onClick={() => setActiveGenre('Fantasía')} className="button-28">
        Fantasía
      </button>
      <button onClick={() => setActiveGenre('Terror')} className="button-28">
        Terror
      </button>
    </div>
  )
}
