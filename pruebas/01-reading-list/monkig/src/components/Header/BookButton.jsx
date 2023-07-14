import { BiBook } from 'react-icons/bi'
import { useEffect, useState, useRef, useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'

export default function BookButton () {
  const { userReadingList } = useContext(BooksContext)
  const [showReadingListItems, setShowReadingListItems] = useState(false)
  const [showReadingListItemsAnimation, setShowReadingListItemsAnimation] = useState(false)
  const counterRef = useRef({ min: 0, max: userReadingList.length })

  useEffect(() => {
    counterRef.current.min = counterRef.current.max
    counterRef.current.max = userReadingList.length
    if (userReadingList.length > 0) {
      setShowReadingListItems(true)
      return
    }
    setShowReadingListItems(false)
  }, [userReadingList.length])

  useEffect(() => {
    let timeoutId
    counterRef.current.max < counterRef.current.min && setShowReadingListItemsAnimation(false)
    if (userReadingList.length > 0 && counterRef.current.max > counterRef.current.min) {
      setShowReadingListItemsAnimation(false)
      timeoutId = setTimeout(() => {
        setShowReadingListItemsAnimation(true)
      }, [5000])
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [userReadingList.length])

  return (
    <button className="p-2 text-3xl relative" onMouseEnter={() => setShowReadingListItemsAnimation(false)}>
        <BiBook/>
        {showReadingListItems &&
           <>
            {showReadingListItemsAnimation &&
              <span className="animate-ping absolute bottom-0 right-0 min-h-[20px] min-w-[20px] rounded-full bg-black opacity-75 "/>
            }
            <span className='absolute bottom-0 right-0 flex items-center justify-center text-xs text-white bg-black rounded-full min-h-[20px] min-w-[20px] animate-fade animate-ease-in animate-normal'>{userReadingList.length}</span>
          </>
        }
    </button>
  )
}
