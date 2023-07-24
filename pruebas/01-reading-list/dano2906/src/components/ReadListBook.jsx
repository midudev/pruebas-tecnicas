import { useReadListStore } from '../stores/BookStore'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export default function ReadListBook ({ book, reloadBookList }) {
  const { title, cover, ISBN } = book
  const { attributes, transform, transition, listeners, setNodeRef } = useSortable({
    id: book.ISBN
  })
  const remove = useReadListStore(state => state.remove)

  const handleRemove = (ISBN) => {
    // Al eliminar de la lista de lectura se sincroniza el estado global y el estado local
    remove(ISBN)
    reloadBookList(ISBN)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <article
        className='w-full h-full flex flex-col items-center justify-center my-1' {...attributes} {...listeners} ref={setNodeRef} style={{
          transform: CSS.Transform.toString(transform),
          transition
        }}
      >
        <img src={cover} alt={`Portada del libro ${title}`} width={128} height={160} className='w-36 h-44 object-fill rounded-md relative' />
      </article>
      <button onClick={() => handleRemove(ISBN)} className='bg-slate-700 text-red-600 font-semibold text-center p-1 rounded border border-red-600 hover:bg-red-200/75' aria-label='delete-book'>Quitar de la lista</button>
    </div>
  )
}
