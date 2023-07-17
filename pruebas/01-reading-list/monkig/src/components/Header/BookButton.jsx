import { BiBook } from 'react-icons/bi'
import { useEffect, useState, useRef, useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'

export default function BookButton ({ showReadingList }) {
  const { readingList, counter } = useContext(BooksContext)
  const [showReadingListItems, setShowReadingListItems] = useState(false)
  const [showReadingListItemsAnimation, setShowReadingListItemsAnimation] = useState(false)
  const counterRef = useRef({ min: readingList.userReadingList.length, max: readingList.userReadingList.length })

  useEffect(() => {
    counterRef.current.min = counterRef.current.max
    counterRef.current.max = readingList.userReadingList.length
    if (readingList.userReadingList.length > 0) {
      setShowReadingListItems(true)
      return
    }
    setShowReadingListItems(false)
  }, [readingList.userReadingList.length])

  useEffect(() => {
    let timeoutId

    setShowReadingListItemsAnimation(false)
    if (readingList.userReadingList.length > 0 && counterRef.current.max > counterRef.current.min) {
      timeoutId = setTimeout(() => {
        setShowReadingListItemsAnimation(true)
      }, [5000])
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [readingList.userReadingList.length])

  return (
    <button className="p-2 text-3xl relative hover:text-slate-200" onClick={showReadingList} onMouseEnter={() => setShowReadingListItemsAnimation(false)}>
        <BiBook/>
        {showReadingListItems &&
           <>
            {showReadingListItemsAnimation &&
              <span className="animate-ping absolute bottom-0 right-0 min-h-[20px] min-w-[20px] rounded-full bg-black opacity-75 "/>
            }
            <span className='absolute bottom-0 right-0 flex items-center justify-center text-xs text-white bg-black rounded-full min-h-[20px] min-w-[20px] animate-fade animate-ease-in animate-normal'>{counter.readingListCounter}</span>
          </>
        }
    </button>
  )
}
