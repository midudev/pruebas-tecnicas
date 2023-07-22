import { useState } from 'react'
import { useReadListStore } from '../stores/BookStore'
import ReadListBook from './ReadListBook'
import See from './icons/See'
import DontSee from './icons/DontSee'

export default function ReadList () {
  const [show, setShow] = useState(false)
  const { readList } = useReadListStore()

  return (
    <div className='absolute right-5 top-5 sm:right-6 sm:top-6 flex flex-col items-end justify-end'>
      <h5 className='w-7 h-7 absolute -top-3 -right-3 z-10 bg-blue-800 rounded-full text-center font-semibold text-white'>{readList.length}</h5>
      <button onClick={() => setShow(!show)} disabled={readList.length <= 0} className={`${readList.length <= 0 ? 'opacity-50' : 'opacity-100 transition hover:scale-105'} relative bg-slate-700 text-blue-600 font-semibold text-center p-3 rounded inline-flex justify-center items-center gap-x-2 border border-blue-600`}>
        {readList.length <= 0 ? <DontSee /> : <See />}
        Lista de lectura
      </button>
      <div className={`${show ? 'grid' : 'hidden'} botttom-0 left-0 w-[180px] max-h-48 sm:w-[360px] sm:max-h-96 overflow-y-scroll mt-3 rounded-md shadow-md bg-slate-800 grid-cols-1 sm:grid-cols-2 gap-2 place-items-center`}>
        {readList.map((book, index) => (
          <ReadListBook key={index} book={book} />
        ))}
      </div>
    </div>
  )
}
