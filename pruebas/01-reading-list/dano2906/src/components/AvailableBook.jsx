import { useReadListStore } from '../stores/BookStore'

export default function AvailableBook ({ book }) {
  const { title, cover } = book
  const add = useReadListStore(state => state.add)

  return (
    <article className='w-3/4 sm:w-full h-auto min-h-96 mx-auto p-3 bg-slate-700 flex flex-col items-center justify-around gap-y-3 font-semibold text-center rounded'>
      <h3 className='max-w-[70%] text-2xl sm:text-xl text-blue-300'>{title}</h3>
      <img src={cover} alt={`Portada del libro ${title}`} width={160} height={240} className='w-40 h-60 object-fill rounded-md aspect-9/16' loading='lazy' />
      <button onClick={() => add(book)} aria-label='add-read-list' className='bg-slate-400 text-blue-900 transition-all p-2 rounded hover:scale-110'>Añadir a la lista</button>
    </article>
  )
}
