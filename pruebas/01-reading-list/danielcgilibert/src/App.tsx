//COMPONENTS
import SectionLibrary from './components/section'
import Header from './components/header'
import Aside from './components/aside'

//HOOKS
import { useStore } from './store/bookStore'
import { useEffect } from 'react'

function App() {
  const { filterBooks, totalBooks, onRehydrateStorage } = useStore()

  async function startFetching() {
    await onRehydrateStorage()
  }

  useEffect(() => {
    window.addEventListener('storage', (event) => {
      if (event.key === 'books-storage') {
        void startFetching()
      }
    })
  }, [])

  return (
    <main className='mt-4 h-screen bg-repeat  text-[#6e6e6f]'>
      <Header />

      <div className='grid pb-8 pt-24'>
        <div className='px-8 md:ml-96'>
          <div className='flex flex-col gap-14 '>
            <Aside />
            <SectionLibrary
              title='Lista de libros'
              books={filterBooks}
              totalBooks={totalBooks}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
