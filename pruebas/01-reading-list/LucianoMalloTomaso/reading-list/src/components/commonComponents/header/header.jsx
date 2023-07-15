import { Filters } from '../../Filters/filters'

export function Header ({ changeFilter }) {
  return (
    <header className='header'>
      <h1>Library</h1>
      <Filters />
    </header>
  )
}
