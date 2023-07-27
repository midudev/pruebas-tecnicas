import { createContext, useCallback, useContext } from 'react'
import { useWishlistReducer } from '../reducer/books'

const context = createContext()

export function WishlistProvider ({ children }) {
  const {
    wishlist,
    addToWishlist,
    removeToWishlist
  } = useWishlistReducer()

  const checkBookInList = useCallback(({ currentBook }) => {
    return wishlist.some(({ book }) => book.ISBN === currentBook.ISBN)
  }, [wishlist])

  return (
    <context.Provider value={{ wishlist, addToWishlist, removeToWishlist, checkBookInList }}>
      {children}
    </context.Provider>
  )
}

export function useWishlistContext () {
  const filterContext = useContext(context)
  return filterContext
}
