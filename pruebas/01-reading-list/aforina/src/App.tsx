import './App.css'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { BooksLayout } from './components/BooksLayout'
import { BooksList } from './components/BooksList'
import { Route } from 'wouter'
import { Footer } from './components/Footer'

function App () {
  return (
    <div className="font-['subjectivity'] flex flex-col justify-center text-5xl">
      <Nav />
      <main className='flex flex-1 min-h-screen flex-col items-center md:items-start md:flex-row gap-x-4 gap-y-8 h-[calc(100%-120px)] w-full max-w-sm md:max-w-7xl mx-auto pt-20 mb-20'>
        <Sidebar />
        <div className='flex gap-x-12 w-full px-4'>
          <Route path='/'>
            <BooksLayout />
          </Route>
          <Route path='/wishlist'>
            <BooksList />
          </Route>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
