'use client'

import { useEffect, useRef } from 'react'

export function SearchInput ({
  initialSearch = ''
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.value = initialSearch
    }
  }, [initialSearch])

  return (
    <div>
      <input
        className='bg-zinc-700 px-4 py-2 rounded'
        ref={inputRef}
        name='search'
        type='text'
        placeholder='laptops, smartphones, ...'
      />
    </div>
  )
}
