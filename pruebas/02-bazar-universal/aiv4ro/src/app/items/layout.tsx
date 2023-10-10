'use client'

import { SearchForm } from '@/components/SearchForm'
import { useSearchParams } from 'next/navigation'

export default function Layout ({
  children
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') ?? ''

  return (
    <>
      <header className='flex items-center justify-between gap-5 px-2'>
        <h1 className='text-2xl font-semibold'>
          Bazar
        </h1>
        <SearchForm initialSearch={search} />
      </header>
      {children}
    </>
  )
}
