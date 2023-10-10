'use client'

export function SearchInput () {
  return (
    <div>
      <input
        className='bg-zinc-700 px-4 py-2 rounded'
        name='search'
        type='text'
        placeholder='laptops, smartphones, ...'
        required
      />
    </div>
  )
}
