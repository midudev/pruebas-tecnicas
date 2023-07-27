import { IconLibrary } from './icons'
import { useStoreModal } from '../store/modalStore'

function HeaderBook (): JSX.Element {
  const { setModal } = useStoreModal()

  return (
    <header className='w-full flex justify-between items-center h-32 sticky top-0 z-40 bg-[#242424] px-10 2xl:px-0'>
      <h2 className='text-5xl font-semibold tracking-wider'>Libros</h2>
      <button id='list-book-user' type='button' aria-label='lista de peliculas' onClick={setModal} title='list'>
        <IconLibrary />
      </button>
    </header>
  )
}

export default HeaderBook
