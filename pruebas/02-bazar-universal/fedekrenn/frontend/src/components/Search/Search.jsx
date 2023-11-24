import './search.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search({ showButton }) {
  const [searchParams, setSearchParams] = useState('')

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    if (!searchParams) return
    if (searchParams.length < 3) return alert('La búsqueda debe tener al menos 3 caracteres')

    navigate(`/items?search=${searchParams.trim()}`)
  }

  return (
    <>
      <form className='search-product' onSubmit={handleSearch} aria-label='search'>
        <input
          type='text'
          name='searchCategory'
          placeholder='laptops, smartphones, ...'
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
        />
        <button type='submit'>🔎</button>
      </form>
      {showButton && <button className='btn' onClick={handleSearch}>Buscar</button>}
    </>
  )
}
