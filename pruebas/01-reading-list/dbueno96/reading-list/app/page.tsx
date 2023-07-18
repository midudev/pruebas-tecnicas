import 'tailwindcss/tailwind.css'
import BookSection from './components/BookSection'
import { bookSectionTilte, readingListSectioNTitle } from './constants.texts'

export default function MainPage () {
  return (
    <main className='bg-gray-800 text-white text-4xl h-screen flex justify-between gap-0'>
      <BookSection title={bookSectionTilte} />
      <BookSection title={readingListSectioNTitle} />
    </main>
  )
}
