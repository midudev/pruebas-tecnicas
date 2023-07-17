import { Filters } from '../../Filters/filters'
import { useListOfLecture } from '../../../hooks/useListOfLecture'

export function Header ({ changeFilter }) {
  const { list } = useListOfLecture()
  return (
    <header className='header'>
      <h1>Library</h1>
      <h2>Books in your list: {list.length}</h2>
      <Filters />
    </header>
  )
}
