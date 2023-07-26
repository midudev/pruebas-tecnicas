import { type BookType } from '../types'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const initialState: BookType[] = JSON.parse(window.localStorage.getItem('readingList')) || []

export const ACTION_TYPES = {
  ADD_TO_LIST: 'ADD_TO_LIST',
  REMOVE_FROM_LIST: 'REMOVE_FROM_LIST',
  CLEAR_LIST: 'CLEAR_LIST'
}

type Action = {
  type: string,
  payload: BookType
}

export const readingListReducer = (state: BookType[], action: Action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]

  return updateState ? updateState(state, action) : state
}

const UPDATE_STATE_BY_ACTION = {
  [ACTION_TYPES.ADD_TO_LIST]: (state: BookType[], action: Action) => {
    const newState = [
      ...state,
      {
        ...action.payload
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [ACTION_TYPES.REMOVE_FROM_LIST]: (state: BookType[], action: Action) => {
    const { ISBN } = action.payload
    const newState = state.filter(item => item.ISBN !== ISBN)
    updateLocalStorage(newState)
    return newState
  },
  [ACTION_TYPES.CLEAR_LIST]: () => {
    updateLocalStorage([])
    return []
  }
}

const updateLocalStorage = (state: BookType[]) => {
  window.localStorage.setItem('readingList', JSON.stringify(state))
}
