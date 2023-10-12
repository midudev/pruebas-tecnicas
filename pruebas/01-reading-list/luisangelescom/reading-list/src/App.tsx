import { ToastContainer } from 'react-toastify'

import Books from './components/books'
import ModalBooks from './components/modal-books'
import HeaderBook from './components/header'
import FilterBook from './components/filter-book'
import { useEffect } from 'react'
import { useBookUser } from './store/bookStoreUser'

function App (): JSX.Element {
  const { addBooksUser } = useBookUser()

  const focus = (): void => {
    addBooksUser()
  }
  useEffect(() => {
    window.addEventListener('visibilitychange', () => {
      focus()
    })

    return () => {
      window.addEventListener('visibilitychange', () => {
        focus()
      })
    }
  }, [])

  return (
    <main>
      <HeaderBook />

      <FilterBook />

      <Books />

      <ModalBooks />
      <ToastContainer
        position='top-right'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme='colored'
      />
    </main>
  )
}

export default App
