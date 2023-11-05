import clsx from 'clsx'
import { useLibraryStore } from '../../store'
import ReadListElement from './ReadListElement'

const SideBar = () => {
  const { readlist, isOpenReadList, setIsOpenReadList } = useLibraryStore()
  const readListLength = readlist.length

  const closeReadList = () => {
    setIsOpenReadList(false)
  }

  return (
    <div className={clsx('fixed top-0 right-0 z-50  bg-black/50 w-full h-full transition-all duration-150 block  ', !isOpenReadList && ' hidden ')}>
      <aside className=" bg-blue-900 px-5 py-3 h-full ml-auto space-y-2 text-white w-full max-w-[300px]  overflow-auto  ">
        <button aria-label="Close readlist sidebar" onClick={closeReadList}>
          <svg width={25} height={25} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
        <h3 className="font-bold text-2xl">Readlist: {readListLength}</h3>
        {readListLength === 0 ? (
          <p>Your readlist is empty</p>
        ) : (
          readlist.map((readListElement, index) => <ReadListElement key={index} readListElement={readListElement} />)
        )}
      </aside>
    </div>
  )
}

export default SideBar
