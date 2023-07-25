// initial state for the list with localStorage if it exists or empty array if not
export const listOfLectureInitialState = JSON.parse(window.localStorage.getItem('list')) || []

export const LIST_ACTIONS_TYPES = {
  ADD_TO_LECTURE_LIST: 'ADD_TO_LECTURE_LIST',
  REMOVE_FROM_LECTURE_LIST: 'REMOVE_FROM_LECTURE_LIST',
  CLEAR_LECTURE_LIST: 'CLEAR_LECTURE_LIST',
  SET_INITIAL_STATE: 'SET_INITIAL_STATE',
  SET_NEW_LIST_SORTED: 'SET_NEW_LIST_SORTED'
}

// update localStorage when the list changes

export const updateLocalStorage = state => {
  window.localStorage.setItem('list', JSON.stringify(state))
}

export const listOfLectureReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case LIST_ACTIONS_TYPES.ADD_TO_LECTURE_LIST:{
      const id = actionPayload.id
      // Check if book is already in list
      const bookInCartIndex = state.findIndex(item => item.id === id)

      // If book is in list, return the state without changes
      if (bookInCartIndex >= 0) {
        return state
      }
      // If book is not in list, return the state with the new book
      const newState = [...state, { ...actionPayload }]
      updateLocalStorage(newState)
      return newState
    }
    case LIST_ACTIONS_TYPES.REMOVE_FROM_LECTURE_LIST:{
      const id = actionPayload.id
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case LIST_ACTIONS_TYPES.CLEAR_LECTURE_LIST:{
      updateLocalStorage([])
      return []
    }
    case LIST_ACTIONS_TYPES.SET_INITIAL_STATE:{
      return actionPayload
    }
    case LIST_ACTIONS_TYPES.SET_NEW_LIST_SORTED:{
      const newState = [...actionPayload]
      updateLocalStorage(newState)
      return newState
    }

    default:
      return state
  }
}
