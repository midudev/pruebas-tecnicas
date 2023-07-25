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
    const { id } = action.payload;
    const bookInReadingListIndex = state.findIndex((item) => item.id === id);

    if (bookInReadingListIndex >= 0) {
      const newState = [
        ...state.slice(0, bookInReadingListIndex),
        {
          ...state[bookInReadingListIndex],
          quantity: state[bookInReadingListIndex].quantity + 1,
        },
        ...state.slice(bookInReadingListIndex + 1),
      ];
      updateLocalStorage(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1,
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

export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
