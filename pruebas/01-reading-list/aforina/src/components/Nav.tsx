import { Link, useRoute } from 'wouter'
import { useListedBooks } from '../store/useBooks'

export const Nav = () => {
  const [match] = useRoute('/')
  const { listedIds } = useListedBooks()

  return (
    <nav className='w-full h-[120px] bg-customLight grid grid-cols-[1fr_auto_1fr]  items-center justify-center text-center border-b-1 border-black'>
      <h1 className='font-extrabold col-start-2 whitespace-nowrap'>
        Rent your favourites{' '}
        <span className='inline-block bg-customPurple rotate-6 hover:rotate-4 text-white py-2 px-4 border-3 transition duration-200 border-black drop-shadow-[4px_5px_0px_rgba(0,0,0,1)]'>
          books
        </span>
      </h1>
      {match ? (
        <Link
          href='/wishlist'
          className='bg-customBlue w-[120px] ml-12 justify-self-center hover:bg-[#97DFFF] text-sm font-semibold py-2 px-6 rounded-md border-1 border-black drop-shadow-[2px_3px_0px_rgba(0,0,0,1)]'
        >
          Library
          {listedIds.length > 0 && (
            <div className='flex absolute right-[-10px] top-4 items-center justify-center text-[16px] pt-1 bg-customPink w-8 h-8 rounded-full text-white border-1 border-black drop-shadow-[0px_1px_0px_rgba(0,0,0,1)]'>
              {listedIds.length}
            </div>
          )}
        </Link>
      ) : (
        <Link
          href='/'
          className='bg-customBlue w-[120px] ml-12 justify-self-center hover:bg-[#97DFFF] text-sm font-semibold py-2 px-6 rounded-md border-1 border-black drop-shadow-[2px_3px_0px_rgba(0,0,0,1)]'
        >
          Book List
        </Link>
      )}
    </nav>
  )
}
