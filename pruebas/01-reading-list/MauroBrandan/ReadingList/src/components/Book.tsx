import { type BookType } from '../types'
import { useReadingList } from '../hooks/useReadingList'

type Props = {
  book: BookType,
}

export function Book ({ book }: Props) {
  const { cover } = book
  const { addToList, removeFromList, isInList } = useReadingList()

  const isAdded = isInList(book)
  const btnText = isAdded ? 'Quitar de la lista' : 'Añadir a lista'
  const bgColor = isAdded ? 'bg-[#94AEFC]' : 'bg-blue-700 '

  const handleClick = () => {
    if (isAdded) {
      removeFromList(book)
      return
    }

    return addToList(book)
  }

  return (
    <article className='flex flex-col justify-end w-[200px] h-[300px] border-gray-200 rounded-lg shadow'>
      <img className='rounded-t-lg w-full h-[300px] object-cover' src={cover} alt='' />
      <button onClick={handleClick} className={`w-full py-3 text-sm font-medium text-center text-white rounded-b-lg ${bgColor} hover:bg-blue-800`}>
        {btnText}
      </button>
    </article>

  )
}
