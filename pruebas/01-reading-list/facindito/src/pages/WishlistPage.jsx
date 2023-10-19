import { Wishlist } from '../components/Wishlist'
import { useWishlistContext } from '../context/listBookContext'

export default function WishlistPage ({ handleChange }) {
  const { wishlist } = useWishlistContext()

  return (

    <div className='flex flex-col gap-4 p-4'>
      <div className='flex justify-between items-center'>
        <button onClick={handleChange} className='bg-rhino-500 flex items-center gap-2 px-4 py-2 rounded w-fit'>
          ←
        </button>
        <span className='text-2xl font-semibold'>{wishlist.length} libros deseados</span>
      </div>
      {
        wishlist.length > 0
          ? (
            <Wishlist wishlist={wishlist} />
            )
          : (
            <div className='flex justify-center items-center'>
              <span>Tu lista de libros esta vacia</span>
            </div>
            )
      }
    </div>
  )
};
