import { useState } from 'react'
import Search from '../Search'
import BookButton from './BookButton'
import ReadingList from './../ReadingList'
export default function Header () {
  const [showReadingList, setShowReadingList] = useState(false)
  const handleShowReadingList = () => {
    console.log('show reading list')
    setShowReadingList(true)
  }
  const handleCloseReadingList = () => {
    setShowReadingList(false)
  }
  return (
    <header className="h-20 w-full flex items-center justify-between">
        <h1 className='p-2 mx-10 text-slate-300 text-2xl '>Books Dev</h1>
        <nav className="flex items-center justify-between mx-10 text-slate-400 relative">
          <Search />
          <BookButton showReadingList={handleShowReadingList} />
          {showReadingList && <ReadingList />}
        </nav>
    </header>
  )
}
