import { Filters } from '../../Filters/filters'

export function Header ({ changeFilter }) {
  return (
    <header className='header'>
      <h1>Book-List</h1>
      <Filters />
    </header>
  )
}
