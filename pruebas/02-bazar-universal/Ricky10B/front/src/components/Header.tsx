import { FormEvent } from 'react'
import { Outlet } from 'react-router-dom'
import img from '../assets/carro-entrega.webp'
import { Search } from './Search'
import { useSearch } from '../hooks/useSearch'

export function Header () {
  const { isEmpty, navigateItemsResult } = useSearch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    navigateItemsResult({ formData })
  }

  return (
    <>
      <header className='flex items-center gap-4 mb-3'>
        <picture className='w-20'>
          <img src={img} alt='delivery truck image' />
        </picture>
        <form
          role='search'
          onSubmit={handleSubmit}
          className='flex-grow'
        >
          <Search
            isEmpty={isEmpty}
          />
        </form>
      </header>

      <Outlet />
    </>
  )
}
