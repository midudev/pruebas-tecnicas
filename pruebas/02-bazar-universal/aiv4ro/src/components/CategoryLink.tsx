import Link from 'next/link'

export function CategoryLink ({
  category,
  count
}: {
  category: string
  count: number
}) {
  return (
    <Link href={`/items?search=${category}`} className='flex gap-1 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded'>
      <span className='font-semibold'>{category}</span>
      -
      <span>{count}</span>
    </Link>
  )
}
