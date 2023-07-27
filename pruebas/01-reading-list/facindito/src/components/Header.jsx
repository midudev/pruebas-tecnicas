import { useWishlistContext } from '../context/listBookContext'
import { Button } from './button'

export function Header ({ handleChange, showSection }) {
  const { wishlist } = useWishlistContext()

  return (
    <header className='max-w-6xl mx-auto p-4 flex flex-wrap gap-4 justify-between items-center'>
      <h1 className='font-bold text-2xl'>My Book List</h1>
      {
        showSection === 'Home' && (
          <Button
            handleChange={handleChange}
            wishlist={wishlist}
          >
            Wishlist
          </Button>
        )
      }
      {
        showSection === 'Wishlist' && (
          <Button
            handleChange={handleChange}
          >
            Catálogo
          </Button>
        )
      }
    </header>
  )
}
