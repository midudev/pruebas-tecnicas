import { EyeIcon, GitHubIcon } from '@/components/icons'
import Filters from '@/components/filters'
import { useReadingList } from '@/hooks/use-reading-list'
import { useBooks } from '@/hooks/use-books'

function Header() {
  const { books } = useBooks()
  const { readingListCount, toggleReadingList } = useReadingList()

  const numOfAvailableBooks = books.length - readingListCount

  const shouldRenderBadge = readingListCount > 0

  return (
    <header className='flex flex-col max-w-5xl gap-8 px-4 pt-5 mx-auto text-zinc-300'>
      <div className='flex items-center justify-end gap-5'>
        <a
          href='https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list'
          rel='noreferrer noopener'
          target='_blank'
          aria-label='Ir al repositorio de GitHub'
        >
          <GitHubIcon />
        </a>
        <button
          aria-label='Mostrar lista de lectura'
          onClick={toggleReadingList}
          className='relative'
        >
          {shouldRenderBadge && (
            <div className='absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-blue-500 rounded-full -top-1 -right-2'>
              {readingListCount}
            </div>
          )}
          <EyeIcon />
        </button>
      </div>
      <div className='flex flex-col gap-4 mb-6 text-zinc-300'>
        <h1 className='text-5xl font-bold text-center 2xl:text-6xl'>
          {numOfAvailableBooks} libros disponibles
        </h1>
        <h2 className='text-2xl font-semibold text-center underline 2xl:text-3xl'>
          Libros en la lista de lectura: {readingListCount}
        </h2>
        <Filters />
      </div>
    </header>
  )
}

export default Header
