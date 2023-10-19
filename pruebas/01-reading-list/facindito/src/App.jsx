import { Header } from './components/Header'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import WishlistPage from './pages/WishlistPage'

export default function App () {
  const [showSection, setShowSection] = useState(window.localStorage.getItem('section') || 'Home')

  const handleChange = () => {
    setShowSection(prev => {
      const newState = prev === 'Home' ? 'Wishlist' : 'Home'
      window.localStorage.setItem('section', newState)
      return newState
    })
  }

  return (
    <div className='min-h-screen bg-rhino-950 text-white'>
      <Header handleChange={handleChange} showSection={showSection} />
      <div className='max-w-6xl mx-auto flex flex-col'>
        {
          showSection === 'Home' && <HomePage />
        }
        {
          showSection === 'Wishlist' && <WishlistPage handleChange={handleChange} />
        }
      </div>
    </div>
  )
}
