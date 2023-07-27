import { useBookUser } from '../store/bookStoreUser'
import { useStoreModal } from '../store/modalStore'
import { IconClose } from './icons'
import ItemBook from './item-book'

function ModalBooks (): JSX.Element {
  const { bookUser, removeBookUser } = useBookUser()
  const { open, setModal } = useStoreModal()

  const removeItem = (ISBN: string): void => {
    removeBookUser(ISBN)
  }

  return (
    <main
      className={`fixed w-full ${open ? 'h-full' : 'h-0 rounded-2xl'} z-50 right-0 left-0 top-0 bg-black/70 shadow-lg transition-all duration-500`}
      style={{
        transform: open ? 'translate(0%,0%)' : 'translate(100%,0%)'

      }}
      onClick={setModal}
    >
      <div className='w-full min-w-[220px] max-w-[520px] absolute top-0 right-0  h-full p-8'>
        <div
          className='border-2 rounded-lg h-full w-full flex flex-col overflow-y-auto bg-black/80'
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <header className='w-full flex justify-between items-center px-7 h-full min-h-[80px] max-h-[80px] sticky top-0 z-50 bg-black'>
            <span className='text-2xl font-medium tracking-wider'>Lista de lectura</span>
            <button type='button' onClick={setModal} aria-label='close' title='close'>
              <IconClose />
            </button>
          </header>
          <div className='grow'>
            {bookUser.library.length === 0
              ? (
                <div className='w-full h-full flex justify-center items-center'>
                  <span className='text-lg font-bold tracking-tight'>No hay libros.</span>
                </div>
                )
              : (
                <section className='w-full grid grid-cols-1 sm:grid-cols-2 px-7 pt-7 gap-5 mb-10'>
                  {bookUser.library.map(({ book }) => <ItemBook key={book.ISBN} book={book} isRemove removeItem={removeItem} />)}
                </section>
                )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ModalBooks
