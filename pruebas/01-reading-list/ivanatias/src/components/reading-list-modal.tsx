import Modal from '@/components/modal'
import BooksList from '@/components/books-list'
import { CloseEyeIcon } from '@/components/icons'
import { useReadingList } from '@/hooks/use-reading-list'

export default function ReadingList() {
  const { toggleReadingList, readingList } = useReadingList()

  return (
    <Modal>
      <div className='border border-zinc-700 shadow-md shadow-zinc-600 text-zinc-300 p-4 flex flex-col rounded-lg w-full max-w-xl min-w-[350px] min-h-[280px] h-full overflow-y-auto bg-zinc-950 max-h-[600px]'>
        <div className='flex items-center justify-between'>
          <h2 className='flex-1 text-3xl font-bold text-center 2xl:text-4xl'>
            Lista de lectura
          </h2>
          <button
            aria-label='Cerrar lista de lectura'
            onClick={toggleReadingList}
          >
            <CloseEyeIcon />
          </button>
        </div>
        {readingList.length === 0 ? (
          <div className='flex flex-col justify-center h-full'>
            <h3 className='text-2xl font-bold text-center text-zinc-300 2xl:text-3xl'>
              No hay libros en la lista de lectura
            </h3>
          </div>
        ) : (
          <BooksList
            books={readingList}
            className='grid grid-cols-1 gap-6 mt-7 sm:grid-cols-2'
          />
        )}
      </div>
    </Modal>
  )
}
