import { Book } from './Icons'
import { delay } from '../utils/delay'
import { useVisibleListBook } from '../hooks/useVisibleListBook'
import { useAppSelector } from '../hooks/store'

export function BtnLibro () {
  const {
    isVisibleSection,
    isVisibleListBook
  } = useAppSelector(state => state.visibleListBookReducer)
  const { readingList } = useAppSelector(state => state.librariesReducer)
  const { setVisible } = useVisibleListBook()

  const handleVisibleListBook = () => {
    if (isVisibleSection) {
      setVisible({
        isSection: false,
        visible: !isVisibleListBook
      })
      
      delay(450).then(() => {
        setVisible({
          isSection: true,
          visible: !isVisibleSection
        })
      })
    } else {
      setVisible({
        isSection: true,
        visible: !isVisibleSection
      })
      
      delay(0).then(() => {
        setVisible({
          isSection: false,
          visible: !isVisibleListBook
        })
      })
    }
  }

  return (
    <div
      className={`bg-[var(--color-btn-cards)] w-10 h-10 p-[5px] rounded-full cursor-pointer relative`}
      onClick={handleVisibleListBook}
    >
      <div className='absolute top-[-6px] right-0'>
        <span className='bg-[#f00] h-5 w-5 font-black rounded-full flex justify-center items-center'>
          {readingList.length}
        </span>
      </div>
      <Book />
    </div>
  )
}
