import { useFilters } from '../../hooks/useFilters'
import { Genres } from '../../types'
import './filters.css'

interface Props {
  displayFilters: boolean
  available: number
  booksInList: number
}

export const Filters: React.FC<Props> = ({ displayFilters, available, booksInList }) => {
  const { filters, changePages, changeGenre } = useFilters()

  function onChangeSelect (event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.currentTarget.value as Genres
    changeGenre(value)
  }

  function onChangeRange (event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.currentTarget.value)
    changePages(value)
  }

  return (
    <div className={`filters ${displayFilters ? 'show-filters-window' : 'hide-window'}`}>
      <header className='filters-header'>
        <h1>Filtros</h1>
      </header>
      <div className='numbers-zone'>
        <div className='bubble'>
          Disponibles : {available}
        </div>
        <div className='bubble'>
          En la lista : {booksInList}
        </div>
      </div>
      <main className='filters-main'>
        <label htmlFor="">Páginas  <span className='bubble'>{filters.pages}</span></label>
        <input onChange={onChangeRange} min={0} max={2000} value={filters.pages} className='filter-range' type="range" />

        <label htmlFor="">Categoría</label>
        <div className='filter-select'>
          <select value={filters.genre} onChange={onChangeSelect}>
            {
              Object.values(Genres).map(genre => <option value={genre} key={genre}>{genre}</option>)
            }
          </select>
        </div>

      </main>
    </div>

  )
}
