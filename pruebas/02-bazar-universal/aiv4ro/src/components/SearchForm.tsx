'use client'

import { useRouter } from 'next/navigation'
import { SearchInput } from './SearchInput'

export function SearchForm ({
  children
}: {
  children?: React.ReactNode
}) {
  const router = useRouter()

  function handleSumbit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const search = formData.get('search')
    if (typeof search === 'string' && search !== '') {
      router.push(`/items/?search=${search}`)
    }
  }

  return (
    <form className='flex flex-col items-center gap-2 mt-2' onSubmit={handleSumbit}>
      <SearchInput />
      {children}
    </form>
  )
}
