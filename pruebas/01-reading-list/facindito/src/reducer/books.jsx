import { useEffect, useReducer } from 'react'

const wishlistInitialState = JSON.parse(window.localStorage.getItem('wishlist')) || []

const updateLocalStore = (state) => {
  window.localStorage.setItem('wishlist', JSON.stringify(state))
}

const WISHLIST_ACTIONS_TYPE = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  CLEAR_LIST: 'CLEAR_LIST',
  SET_WISHLIST: 'SET_WISHLIST'
}

const UPDATE_WISHLIST_BOOKS_BY_ACTION = {
  [WISHLIST_ACTIONS_TYPE.ADD_BOOK]: (state, action) => {
    const currentBook = action.payload

    const bookInList = state.some(({ book }) => book.ISBN === currentBook.ISBN)
    if (!bookInList) {
      const newState = [
        ...state, { book: currentBook }
      ]
      updateLocalStore(newState)
      return newState
    }
    return state
  },
  [WISHLIST_ACTIONS_TYPE.REMOVE_BOOK]: (state, action) => {
    const currentBook = action.payload
    const newState = state.filter(({ book }) => book.ISBN !== currentBook.ISBN)
    updateLocalStore(newState)
    return newState
  },
  [WISHLIST_ACTIONS_TYPE.SET_WISHLIST]: (state, action) => action.payload
}

function wishlistReducer (state, action) {
  const { type } = action
  const updateState = UPDATE_WISHLIST_BOOKS_BY_ACTION[type]
  return updateState ? updateState(state, action) : state
}

export function useWishlistReducer () {
  const [state, dispatch] = useReducer(wishlistReducer, wishlistInitialState)

  useEffect(() => {
    const storageListener = (event) => {
      if (event.key === 'wishlist') {
        dispatch({ type: 'SET_WISHLIST', payload: JSON.parse(event.newValue) })
      }
    }

    window.addEventListener('storage', storageListener)

    return () => {
      window.removeEventListener('storage', storageListener)
    }
  }, [])

  const addToWishlist = (book) => dispatch({
    type: WISHLIST_ACTIONS_TYPE.ADD_BOOK,
    payload: book
  })

  const removeToWishlist = (book) => dispatch({
    type: WISHLIST_ACTIONS_TYPE.REMOVE_BOOK,
    payload: book
  })
  return {
    wishlist: state,
    addToWishlist,
    removeToWishlist
  }
}
