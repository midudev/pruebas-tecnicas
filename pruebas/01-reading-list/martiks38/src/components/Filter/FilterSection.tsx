import { useId } from 'react'
import { useFilters } from '@/hooks/useFilters'

import { books, genres } from '@/assets/values'
import { allGenre } from '@/assets/constants'

import homeStyles from '@/assets/styles/Home.module.css'

export function FilterSection() {
  const numberPagesID = useId()
  const { currentGenre, numberPages, changeCurrentGenre, changeNumberPages } = useFilters()

  return (
    <section className={homeStyles.homeMain__bookGenresSection}>
      <h3>Cantidad de páginas</h3>
      <label htmlFor={numberPagesID}></label>
      <input
        type='range'
        name={numberPagesID}
        id={numberPagesID}
        min={0}
        step={50}
        onChange={changeNumberPages}
        aria-describedby='numberPage'
      />
      <span aria-describedby='numberPage'>{numberPages}</span>
      <h3 className={homeStyles.booksGenresSection__title}>Género</h3>
      <ul className={homeStyles.booksGenresSection__list}>
        {genres.map((genre) => (
          <li key={genre} className={homeStyles.booksGenresSection__listItem}>
            <button
              className={`${homeStyles.booksGenresSection__listItem__button} ${
                currentGenre === genre ? homeStyles.genreActive : ''
              }`}
              data-genre={genre}
              onClick={changeCurrentGenre}
              aria-label={
                genre === allGenre
                  ? '`Filtrar lista de libros por cualquier género`'
                  : `Mostrar sólo libros de ${genre}`
              }
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
