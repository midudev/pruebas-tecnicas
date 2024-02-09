import { useContext } from 'react'
import { FiltersContext } from '../context/filters-context'
import { Book } from '.'
import { useReadingListStore } from '../store/reading-list-store'
import { type Book as BookType } from '../types'

export const ReadingList = () => {
  const readingList = useReadingListStore((state) => state.readingList)
  const { showSideBar, setShowSideBar } = useContext(FiltersContext)

  return (
    <>
      {/* Mobile res */}
      <div id="drawer-navigation"
        className={`fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform  bg-white dark:bg-gray-800 sm:hidden ${showSideBar ? 'translate-x-full' : ''}`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label">
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Libros de interés</h5>
        <button
          onClick={() => { setShowSideBar(curr => !curr) }}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <List readingList={readingList} isMobile={true} />
        </div>
      </div>

      {/* Desktop res */}
      <aside className="col-start-4 col-end-5 p-4 border-2 rounded-xl h-fit hidden min-[640px]:block">
        <h2 className="mb-8 text-2xl font-bold leading-none tracking-tight">Libros de interés</h2>
        <List readingList={readingList} />
      </aside>
    </>
  )
}

const List = ({ readingList, isMobile }: { readingList: BookType[], isMobile?: boolean }) => {
  return (
    <>
      {readingList.length === 0 && <span>Aún no has seleccionado ningún libro para leer</span>}
      <section className='grid grid-cols-2 gap-2' aria-label={`${isMobile ? 'reading-list-content' : ''}`}>
        {readingList.map(({ ISBN, title, author, cover, synopsis }) => (
          <Book key={ISBN}
            title={title}
            author={author}
            cover={cover}
            ISBN={ISBN}
            synopsis={synopsis}
            isReadListMode={true} />
        ))}
      </section>
    </>
  )
}
