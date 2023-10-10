'use client'

import { SearchResults } from '@/components/SearchResults'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function Page () {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  if (search === null) {
    throw new Error('Search param is required')
  }

  return (
    <Suspense fallback={<p className='px-2 mt-2'>Loading...</p>}>
      <SearchResults search={search} />
    </Suspense>
  )
}
