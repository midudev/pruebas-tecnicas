import './App.css'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { BooksLayout } from './components/BooksLayout'
import { BooksList } from './components/BooksList'
import { Route } from 'wouter'

function App () {
  return (
    <div className="font-['subjectivity'] justify-center h-screen text-5xl">
      <Nav />
      <main className='flex gap-x-4 h-[calc(100%-120px)] w-full max-w-7xl mx-auto py-20'>
        <Sidebar />
        <div className='flex gap-x-12 w-full'>
          <Route path='/'>
            <BooksLayout />
          </Route>
          <Route path='/wishlist'>
            <BooksList />
          </Route>
        </div>
      </main>
    </div>
  )
}

export default App
