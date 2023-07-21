import { TextInput, MultiSelect, MultiSelectItem } from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Books } from './Books'
import { getMaxPages, getMinPages } from '../services/books.service'
import { useState } from 'react'

export function BookList () {
  const minPages = getMinPages()
  const maxPages = getMaxPages()
  const [filter, setFilter] = useState({
    search: '',
    genre: [],
    pages: maxPages
  })

  const handleChange = (e) => {
    if (e.target.id === 'search') setFilter({ ...filter, search: e.target.value })
    if (e.target.id === 'pages') setFilter({ ...filter, pages: e.target.value })
  }

  const handleGenresChange = (selectedItems) => {
    setFilter({ ...filter, genre: selectedItems })
  }

  return (
    <>
      <main className='mt-10 flex flex-col gap-10 max-w-[1280px] mx-auto'>
        <section className='flex justify-between gap-10'>
          <div className='flex flex-col gap-1 w-2/4'>
            <label className='font-bold' htmlFor='search'>Título o autor</label>
            <TextInput id='search' icon={MagnifyingGlassIcon} placeholder='George Orwell' value={filter.search} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-1 w-1/4'>
            <label className='font-bold' htmlFor='genre'>Género</label>
            <MultiSelect id='genre' placeholder='Todos los géneros' value={filter.genre} onValueChange={handleGenresChange}>
              <MultiSelectItem value='fantasy'>Fantasía</MultiSelectItem>
              <MultiSelectItem value='horror'>Terror</MultiSelectItem>
              <MultiSelectItem value='romance'>Romance</MultiSelectItem>
              <MultiSelectItem value='scifi'>Ciencia Ficción</MultiSelectItem>
            </MultiSelect>
          </div>
          <div className='flex flex-col gap-1 w-1/4'>
            <label className='font-bold' htmlFor='pages'>Número de páginas</label>
            <div className='flex gap-2'>
              <TextInput type='number' className='w-min min-w-[85px]' id='pages' placeholder='' value={filter.pages} onChange={handleChange} />
              <input className='w-full' id='pages' type='range' min={minPages} max={maxPages} step={1} value={filter.pages} onChange={handleChange} />
            </div>
          </div>
        </section>

        <section className='flex gap-20'>
          <article className='w-full'>
            <h3 className='text-xl font-bold mb-3'>Catálogo de libros disponibles</h3>
            <Books />
          </article>
          <article className='w-full'>
            <h3 className='text-xl font-bold mb-3'>Lista de lectura</h3>
            <Books />
          </article>
        </section>
      </main>
    </>
  )
}
