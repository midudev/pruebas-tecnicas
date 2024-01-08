import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { AddIcon } from './Icons'
import { toast } from 'sonner'

export function BookItem ({ book }) {
  const { addBookToReadingList } = useZustandBookStore()
  const { id, bookTitle, bookCover } = book

  const handleClick = () => {
    toast('Libro agregado a la lista de lectura 🥳')
    addBookToReadingList(id)
  }

  return (
    <article className='w-full h-[200px] border-[4px] border-[#f9fafb] p-1 rounded-md relative group overflow-hidden'>
      <img
        src={bookCover}
        alt={`cover del libro: ${bookTitle}`}
        className='w-full h-full rounded-md object-cover object-top'
      />
      <aside className='h-[60px] duration-200 translate-y-[100%] absolute bottom-0 left-0 w-full flex items-center justify-center bg-gradient-to-t from-[#f9fafb] via-[#f9fafbd9] to-[#f9fafb09] group-hover:translate-y-[0%]'>
        <AddIcon className='w-[25px] duration-200 stroke-[#171717] cursor-pointer hover:scale-105' onClick={handleClick} />
      </aside>
    </article>
  )
}
