import { SearchResults } from '@/components/SearchResults'
import { Suspense } from 'react'

export default function Page ({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const search = typeof searchParams?.search === 'string' ? searchParams.search : ''

  return (
    <Suspense fallback={<p className='px-2 mt-2'>Loading...</p>}>
      <SearchResults search={search} />
    </Suspense>
  )
}
