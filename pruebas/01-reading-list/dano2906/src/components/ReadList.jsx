import { useState, useEffect } from 'react'
import { useReadListStore } from '../stores/BookStore'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import ReadListBook from './ReadListBook'
import See from './icons/See'
import DontSee from './icons/DontSee'

export default function ReadList () {
  const [show, setShow] = useState(false)
  const { readList } = useReadListStore()
  const [booksList, setBooksList] = useState([])

  function handleDragEnd (ev) {
    setBooksList((booksList) => {
      const oldIndex = booksList.findIndex((book) => book.ISBN === ev.active.id)
      const newIndex = booksList.findIndex((book) => book.ISBN === ev.over.id)
      return arrayMove(booksList, oldIndex, newIndex)
    })
  }

  function reloadBookList (ISBN) {
    setBooksList((booksList) => {
      return booksList.filter((book) => book.ISBN !== ISBN)
    })
  }

  useEffect(() => {
    setBooksList(readList)
  }, [readList])

  return (
    <div className='absolute right-5 top-5 sm:right-6 sm:top-6 flex flex-col items-end justify-end'>
      <h5 className='w-7 h-7 absolute -top-3 -right-3 z-10 bg-blue-800 rounded-full text-center font-semibold text-white'>{readList.length}</h5>
      <button onClick={() => setShow(!show)} disabled={readList.length <= 0} className={`${readList.length <= 0 ? 'opacity-50' : 'opacity-100 transition hover:scale-105'} relative bg-slate-700 text-blue-600 font-semibold text-center p-3 rounded inline-flex justify-center items-center gap-x-2 border border-blue-600`}>
        {readList.length <= 0 ? <DontSee /> : <See />}
        Lista de lectura
      </button>
      {booksList.length > 0 &&
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={readList} strategy={verticalListSortingStrategy}>
            <div className={`${show ? 'grid' : 'hidden'} botttom-0 left-0 p-2 w-[180px] max-h-96 sm:w-[360px] overflow-y-scroll mt-3 rounded-md shadow-md bg-slate-800 grid-cols-1 sm:grid-cols-2 gap-2 place-items-center`}>
              {booksList.map((book) => (
                <ReadListBook key={book.ISBN} book={book} reloadBookList={reloadBookList} />
              ))}
            </div>
          </SortableContext>
        </DndContext>}
    </div>
  )
}
