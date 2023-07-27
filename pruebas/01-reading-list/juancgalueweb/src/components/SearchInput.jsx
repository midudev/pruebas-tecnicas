import { Input } from 'antd'
import { useSearchBooks } from '../stores/searchBooks'

export const SearchInput = () => {
  const search = useSearchBooks((state) => state.search)
  const setSearch = useSearchBooks((state) => state.setSearch)
  const searchBooks = useSearchBooks((state) => state.searchBooks)

  const handleChange = (event) => {
    setSearch(event.target.value)
    searchBooks()
  }

  return (
    <div>
      <Input
        className='search-input'
        placeholder='Buscar libro...'
        onChange={handleChange}
        value={search}
        allowClear
      />
    </div>
  )
}
