import './App.css'
import BookList from './components/Book/BookList'
import Header from './components/Header'
import ModalBookInfo from './components/ModalBookInfo/ModalBookInfo'
import { useBooksStore } from './store/books'
import { twMerge } from 'tailwind-merge'
import Aside from './components/Aside'
import useStorageChange from './hooks/useStorageChange'

function App() {
  useStorageChange()
  const listOfBooks = useBooksStore(state => state.listOfBooks)
  const isModalOpen = useBooksStore(state => state.isModalOpen)

  const variants = {
    modalOpen: isModalOpen && ' transition-all duration-500',
  }

  return (
    <>
      <Header />
      <main
        className={twMerge(
          'flex w-full border-y-2 border-gray-700 bg-slate-900 ',
          variants.modalOpen,
        )}
      >
        <section className=' flex h-[calc(100vh-48px)] w-full flex-1 flex-col items-center  overflow-y-scroll py-4 sm:p-10 '>
          <BookList books={listOfBooks} />
        </section>
        <Aside />
      </main>
      {isModalOpen && <ModalBookInfo />}
    </>
  )
}

export default App
