import { Header } from './components/Header'
import { ListOfBooks } from './components/ListOfBooks'
import { ReadingList } from './components/ReadingList'
import { useBookZustandStore } from './hooks/useBookZustandStore'

function App () {
  const { readingList } = useBookZustandStore()
  const readingListLength = readingList?.length

  return (
    <>
      <Header />

      <main className='w-full px-10 pt-[150px]'>
        <div className={`grid ${readingListLength > 0 ? 'grid-cols-5' : 'grid-cols-1'} gap-8`}>
          <div className=' col-span-3'>
            <h2 className='text-center text-3xl my-7 text-[#ededea]'>Libros</h2>
            <ListOfBooks />
          </div>

          {
            readingListLength > 0 && (
              <div className='col-span-2'>
                <h2 className='text-center text-3xl my-7'>Lista de lectura</h2>
                <ReadingList />
              </div>
            )
          }
        </div>
      </main>
    </>
  )
}

export default App
