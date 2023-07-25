import { LOCAL_STORAGE_EVENT } from '../constants'
import { type Action, type State } from '../types'

/** Sincroniza el estado en el localstorage y despacha el evento para
 * sincronizar entre pestañas.
 */
const updateLocalStorage = (state: State) => {
  localStorage.setItem('readList', JSON.stringify(state.readList))
  localStorage.setItem('filters', JSON.stringify(state.filters))
  localStorage.setItem('sortReadListByPriority', JSON.stringify(state.sortReadListByPriority))

  window.dispatchEvent(new Event(LOCAL_STORAGE_EVENT))
}

export function booksReducer (state: State, action: Action) {
  const { type } = action

  if (type === 'SET_BOOKS') {
    return {
      ...state,
      books: action.payload,
      loading: false
    }
  }

  if (type === 'SET_READ_LIST') {
    return {
      ...state,
      readList: action.payload
    }
  }

  if (type === 'ADD_BOOK') {
    const newState = {
      ...state,
      readList: [...state.readList, action.payload]
    }

    updateLocalStorage(newState)
    return newState
  }

  if (type === 'REMOVE_BOOK') {
    const newState = {
      ...state,
      readList: state.readList.filter(book => book.title !== action.payload.title)
    }

    updateLocalStorage(newState)
    return newState
  }

  if (type === 'SET_BOOK_AS_PRIO') {
    const newState = {
      ...state,
      readList: state.readList.map(book => {
        if (book.ISBN === action.payload.ISBN) {
          return {
            ...book,
            priority: book.priority === undefined ? true : !book.priority
          }
        }
        return book
      })
    }

    updateLocalStorage(newState)
    return newState
  }

  if (type === 'SET_FILTERS') {
    // Comprobamos si los filtros són lo mismo que los que ya tenemos
    const { payload } = action
    const areEqual = Object.keys(payload).every(key => (payload as any)[key] === (state.filters as any)[key])
    if (areEqual) return state

    const newState = {
      ...state,
      filters: action.payload
    }

    updateLocalStorage(newState)
    return newState
  }

  if (type === 'SET_SORT_READ_LIST_BY_PRIORITY') {
    if (state.sortReadListByPriority === action.payload) return state

    const newState = {
      ...state,
      sortReadListByPriority: action.payload
    }

    updateLocalStorage(newState)
    return newState
  }

  return state
}
