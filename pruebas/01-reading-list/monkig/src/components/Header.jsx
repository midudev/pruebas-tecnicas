import { BiBook } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import Search from './Search'
export default function Header ({ counter }) {
  const [showReadingListItems, setShowReadingListItems] = useState(false)
  const [showReadingListItemsAnimation, setShowReadingListItemsAnimation] = useState(false)
  useEffect(() => {
    if (counter > 0) {
      setShowReadingListItems(true)
      return
    }
    setShowReadingListItems(false)
  }, [counter])

  useEffect(() => {
    let timeoutId
    if (counter > 0) {
      timeoutId = setTimeout(() => {
        setShowReadingListItemsAnimation(true)
      }, [5000])
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [counter])
  return (
    <header className="flex h-24 p-5 bg-yellow-500 justify-between items-center ">
        <h1>Books dev</h1>
       <nav className='flex items-center'>
            <Search />
            <button className='p-2 text-3xl relative' onMouseEnter={() => setShowReadingListItemsAnimation(false)}><BiBook/>{showReadingListItems && (
            <span>
                {showReadingListItemsAnimation && <span className="animate-ping absolute bottom-0 right-0 min-h-[20px] min-w-[20px] rounded-full bg-black opacity-75"></span>}
                 <span className='absolute bottom-0 right-0 flex items-center justify-center text-xs text-white bg-black rounded-full min-h-[20px] min-w-[20px]'>{counter}</span>
            </span>
            )}</button>
       </nav>
    </header>
  )
}
