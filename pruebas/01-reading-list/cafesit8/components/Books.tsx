'use client'
import { useStore } from '@/store/zustand'
import Book from './Book'

export default function Books() {
  const { dataFiltered } = useStore()
  if(dataFiltered.length === 0) return <span>Loading...</span>
  return (
    <div className='w-full grid sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
        {dataFiltered.map((book) => (
            <Book key={book.title} book={book} />
        ))}
    </div>
  )
}
