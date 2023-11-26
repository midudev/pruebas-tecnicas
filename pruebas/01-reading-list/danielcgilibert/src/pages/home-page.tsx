//COMPONENTS
import SectionLibrary from '../components/section'
import Header from '../components/header'
import Aside from '../components/aside'

//HOOKS
import { useStore } from '../store/bookStore'
import { useEffect } from 'react'

export default function HomePage() {
  const { filterBooks, totalBooks, onRehydrateStorage } = useStore()

  useEffect(() => {
    window.addEventListener('storage', (event) => {
      if (event.key === 'books-storage') {
        onRehydrateStorage()
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
