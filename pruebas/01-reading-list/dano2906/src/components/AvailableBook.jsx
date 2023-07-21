import { useReadListStore } from '../stores/BookStore'

export default function AvailableBook ({ book, inReadList }) {
  const { title, cover } = book
  const add = useReadListStore(state => state.add)
  const remove = useReadListStore(state => state.remove)

  const handleFavorite = (book) => {
    if (inReadList) {
      remove(book.ISBN)
    } else {
      add(book)
    }
  }

  return (
    <article className='w-3/4 sm:w-full h-96 mx-auto p-3 bg-slate-700 flex flex-col items-center justify-around gap-y-3 font-semibold text-center rounded'>
      <h3 className='text-2xl sm:text-xl text-blue-500'>{title}</h3>
      <img src={cover} alt={`Portada del libro ${title}`} width={160} height={240} className='w-40 h-60 object-fill rounded-md' />
      <button onClick={() => handleFavorite(book)} className='bg-slate-400 text-blue-800 transition-all p-2 rounded hover:scale-110'>{inReadList ? 'Quitar de la lista' : 'Añadir a la lista'}</button>
    </article>
  )
}
