import React from 'react'

export default function Filtros({genres, handleFilter}) {
  return (
    <section className='mb-5'>
      <div className='flex flex-col'>
        <label htmlFor="genres" className='mr-2'>Filtrar por género</label>
        <select name="genres" id="genres" className='px-2 py-1 text-lg' onChange={handleFilter}>
          <option value="all">Todos</option>
          {
            genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)
          }
        </select>
      </div>
      
    </section>
  )
}
