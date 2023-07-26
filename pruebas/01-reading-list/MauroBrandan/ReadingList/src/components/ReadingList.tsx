import { useReadingList } from '../hooks/useReadingList'
import { CloseIcon, ExpandIcon, TrashBinIcon, ListIcon } from './Icons'
import { Book } from './Book'

export function ReadingList () {
  const { state, show, updateShow, clearList } = useReadingList()

  const displayClass = show ? '' : 'hidden'

  const handleClose = () => {
    updateShow()
  }

  const handleExpand = () => {
    // change styles
  }

  const handleClear = () => {
    clearList()
  }

  return (
    <div className={`${displayClass} w-80 ml-11`}>
      <aside className={`${displayClass} fixed top-0 right-0 w-80 h-screen animate-slide-in-fwd-right`}>
        <div className='h-full overflow-y-auto bg-[#121421] no-scrollbar'>
          <div className='fixed px-3 py-3 w-full h-20 bg-[#121421] border-b-2 border-white'>
            <div className='flex justify-between mb-2'>
              <div className='flex gap-5 [&>span]:hover:cursor-pointer'>
                <span>
                  <CloseIcon onClick={handleClose} />
                </span>
                <span>
                  <ExpandIcon onClick={handleExpand} />
                </span>
              </div>
              <span className='hover:cursor-pointer' onClick={handleClear}>
                <TrashBinIcon />
              </span>
            </div>
            <h2 className='font-bold text-2xl text-white'>Mi Lista</h2>
          </div>
          <ul className='flex flex-col items-center gap-16 mt-16 py-16 overflow-y-hidden'>
            {!(state.length > 0) && (<p className='text-2xl text-white text-center'>Aun no tienes libros agregados 😀</p>)}
            {state.map((book) => (
              <li key={book.ISBN}>
                <Book book={book} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export function ReadingListButton () {
  const { show, updateShow } = useReadingList()
  const displayClass = show ? 'hidden' : ''

  return (
    <button onClick={() => updateShow()} className={`${displayClass} absolute right-10 top-10`}>
      <ListIcon className='w-10' />
    </button>
  )
}
