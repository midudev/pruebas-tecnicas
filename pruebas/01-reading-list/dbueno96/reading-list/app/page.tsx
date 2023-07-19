import Books from '../books.json'
import 'tailwindcss/tailwind.css'
import BookSection from './components/BookSection'
import { bookSectionTilte, readingListSectioNTitle } from './constants.texts'
import React from 'react'

export default function MainPage () {
  const books:ILibrary['books'] = React.useMemo(() => (((Books as any).library as any).map(({ book }:any) => ({ ...book }))), [])
  return (
    <main className='bg-gray-800 text-white text-4xl h-screen flex justify-between gap-0 overflow-hidden'>
      <BookSection className='flex-grow' title={bookSectionTilte} books={books} />
      <BookSection title={readingListSectioNTitle} books={[]} />
    </main>
  )
}
