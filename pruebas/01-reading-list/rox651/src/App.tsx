import { AvailableBooks, Library, LibraryFilters, SideBar } from './components'
import { useStorageChange } from './hooks'

function App() {
  useStorageChange()
  return (
    <>
      <main className="py-10 px-3 space-y-4">
        <h1 className=" text-4xl text-center text-blue-500 font-bold ">Meet your next favorite book</h1>
        <header className=" space-y-5">
          <LibraryFilters />
          <AvailableBooks />
        </header>
        <Library />
      </main>
      <SideBar />
    </>
  )
}

export default App
