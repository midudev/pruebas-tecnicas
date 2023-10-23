'use client'

import { useRouter } from 'next/navigation'
import { Button } from './button'

type SearchBoxProps = {
  isMini?: boolean
}
export default function SearchBox ({ isMini }: SearchBoxProps) {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const search = formData.get('search-box')

    router.push(`/items?search=${search}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-box" className="mb-2 text-sm font-medium sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input id="search-box" name="search-box" type="search" className={`block w-full ${isMini ? 'p-2' : 'p-4'} pr-10 text-sm bg-brand-light border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500`} placeholder="Laptops, smartphones..." autoFocus={!isMini} tabIndex={1} required />
      </div>
      {
        !isMini && (
          <Button>
            Search
          </Button>
        )
      }
    </form>
  )
}
