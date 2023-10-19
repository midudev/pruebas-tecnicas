import { BookIcon } from './icons'

export function Button ({ handleChange, children, wishlist = [] }) {
  return (
    <button
      onClick={handleChange}
      className='relative flex items-center px-3 py-2 rounded-md border-2 border-rhino-500 text-white hover:bg-rhino-500 group'
    >
      {children}
      <div>
        <BookIcon />
        {
                wishlist.length > 0 && (
                  <div
                    className='w-6 h-6 absolute flex justify-center items-center rounded-full bg-rhino-500 -top-2 -right-2 text-white text-sm border-2 border-transparent group-hover:bg-rhino-950 group-hover:border-rhino-500'
                  >
                    {wishlist.length}
                  </div>
                )
              }
      </div>
    </button>
  )
};
