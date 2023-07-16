import { useLayoutEffect, useState } from 'react'
import './Category.css'

/* eslint-disable react/prop-types */
export const Category = ({
  activeGenre,
  setActiveGenre,
  library,
  setFiltered,
  lecture,
}) => {
  const [originalLibrary, setOriginalLibrary] = useState([])

  useLayoutEffect(() => {
    setOriginalLibrary(library)
  }, [library])

  useLayoutEffect(() => {
    if (activeGenre === '') {
      const elementosDiferentes = originalLibrary.filter(
        (el) => !lecture.includes(el) && el.book.genre.includes(activeGenre)
      )
      setFiltered(elementosDiferentes)
      return
    }

    const filtered = originalLibrary.filter(
      (el) => el.book.genre.includes(activeGenre) && !lecture.includes(el)
    )
    setFiltered(filtered)
  }, [activeGenre, originalLibrary, lecture, setFiltered])

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
