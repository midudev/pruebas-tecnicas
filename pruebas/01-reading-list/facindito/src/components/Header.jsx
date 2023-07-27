import { Link } from 'react-router-dom'
import { BookIcon } from './icons'
import { useWishlistContext } from '../context/listBookContext'

export function Header () {
  const { wishlist } = useWishlistContext()

  return (
    <header className='max-w-6xl mx-auto p-4 flex justify-between items-center'>
      <Link to='/' className='font-bold text-2xl'>My Book List</Link>
      <Link to='/wishlist' className='relative'>
        <BookIcon />
        {
          wishlist.length > 0 && (
            <div
              className='w-4 h-4 absolute flex justify-center items-center rounded-full bg-rhino-500 top-0 right-0 text-white text-[10px]'
            >
              {wishlist.length}
            </div>
          )
        }
      </Link>
    </header>
  )
}
