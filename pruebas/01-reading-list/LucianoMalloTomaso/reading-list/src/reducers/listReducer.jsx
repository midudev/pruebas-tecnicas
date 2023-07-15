export const listOfLectureInitialState = []

export const LIST_ACTIONS_TYPES = {
  ADD_TO_LECTURE_LIST: 'ADD_TO_READING_LIST',
  REMOVE_FROM_LECTURE_LIST: 'REMOVE_FROM_READING_LIST',
  CLEAR_LECTURE_LIST: 'CLEAR_READING_LIST'
}

// update localStorage when the list changes

export const updateLocalStorage = state => {
  window.localStorage.setItem('list-of-lecture', JSON.stringify(state))
}

export const readingListReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case LIST_ACTIONS_TYPES.ADD_TO_LECTURE_LIST:{
      const id = actionPayload.title
      // Check if book is already in list
      const bookInCartIndex = state.findIndex(item => item.title === id)

      // If book is in list, return the state without changes
      if (bookInCartIndex >= 0) {
        return state
      }
      // If book is not in list, return the state with the new book
      const newState = [...state, ...actionPayload]
      updateLocalStorage(newState)
      return newState
    }
    case LIST_ACTIONS_TYPES.REMOVE_FROM_LECTURE_LIST:{
      const id = actionPayload.id
      const newState = state.filter(item => item.title !== id)
      updateLocalStorage(newState)
      return newState
    }
    case LIST_ACTIONS_TYPES.CLEAR_LECTURE_LIST:{
      updateLocalStorage(listOfLectureInitialState)
      return listOfLectureInitialState
    }

    default:
      return state
  }
}
