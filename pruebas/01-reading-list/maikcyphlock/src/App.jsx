import { useEffect } from 'react'
import BookList from './components/BookList'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { useBooksActions } from './hooks/useBooks'
import SidebarProvider from './hooks/useSidebar.jsx'

const AppBlock = () => {
  const { getAlldata } = useBooksActions()
  useEffect(
    () => {
      const update = () => {
        getAlldata()
      }
      window.addEventListener('storage', update)

      return () => {
        window.removeEventListener('storage', update)
      }
    }, []
  )
  return (
    <>

        <SidebarProvider>
          <div className=''>
            <Navbar />
            <BookList />
          </div>
          <Sidebar isVisible={false} />
        </SidebarProvider>

    </>
  )
}

export default AppBlock
