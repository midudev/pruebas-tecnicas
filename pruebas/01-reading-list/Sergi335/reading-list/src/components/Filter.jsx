import { useState } from 'react'

export default function Filter ({ changeFilters }) {
  const [minPages, setMinPages] = useState(0)
  const handleChangeMinPages = (event) => {
    setMinPages(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      pages: event.target.value
    }))
  }
  const handleChangeGenre = (event) => {
    changeFilters(prevState => ({
      ...prevState,
      genre: event.target.value
    }))
  }
  return (
        <section className="filters">
            <div>
                <label htmlFor="pages">Páginas</label>
                <input
                    type='range'
                    id='pages'
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPages}
                />
                <span>{minPages}</span>
            </div>
            <div>
                <label htmlFor="genre">Género</label>
                <select name="genre" id="genre" onChange={handleChangeGenre}>
                    <option value="all">Todos</option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Ciencia ficción">Ciencia ficción</option>
                    <option value="Zombies">Zombies</option>
                    <option value="Terror">Terror</option>
                </select>
            </div>
        </section>
  )
}
