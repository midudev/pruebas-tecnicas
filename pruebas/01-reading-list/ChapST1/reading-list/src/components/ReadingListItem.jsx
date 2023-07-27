import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { DeleteIcon } from './Icons'
import { toast } from 'sonner'

export function ReadingListItem ({ book }) {
  const { removeToReadingList } = useZustandBookStore()
  const { id, bookTitle, bookCover } = book

  const handleClick = () => {
    toast('Libro eliminado de la lista de lectura 🥲')
    removeToReadingList(id)
  }

  return (
    <article key={id} className='w-full h-[200px] border-[4px] border-[#f9fafb] overflow-hidden p-1 rounded-md relative group' id={id}>
      <img
        src={bookCover}
        alt={`cover del libro: ${bookTitle}`}
        className='w-full h-full rounded-md object-cover object-top'
      />
      <aside className=' h-[60px] duration-200 translate-y-[100%] absolute bottom-0 left-0 w-full flex items-center justify-center bg-gradient-to-t from-[#f9fafb] via-[#f9fafbd9] to-[#f9fafb09] group-hover:translate-y-[0%]'>
        <DeleteIcon className='w-[25px] stroke-[#f63b3b] cursor-pointer' onClick={handleClick} />
      </aside>
    </article>
  )
}
