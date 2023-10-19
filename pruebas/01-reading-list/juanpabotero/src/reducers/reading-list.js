export const readingListInitialState =
  JSON.parse(window.localStorage.getItem('readingList')) || [];

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('readingList', JSON.stringify(state));
};

export const READING_LIST_ACTION_TYPES = {
  ADD_TO_READING_LIST: 'ADD_TO_READING_LIST',
  REMOVE_FROM_READING_LIST: 'REMOVE_FROM_READING_LIST',
  CLEAR_READING_LIST: 'CLEAR_READING_LIST',
};

const UPDATE_STATE_BY_ACTION = {
  [READING_LIST_ACTION_TYPES.ADD_TO_READING_LIST]: (state, action) => {
    const newState = [
      ...state,
      {
        ...action.payload, // book
      },
    ];

    updateLocalStorage(newState);
    return newState;
  },
  [READING_LIST_ACTION_TYPES.REMOVE_FROM_READING_LIST]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [READING_LIST_ACTION_TYPES.CLEAR_READING_LIST]: () => {
    updateLocalStorage([]);
    return [];
  },
};

export const readingListReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
