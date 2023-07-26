export const readingListinitialState = JSON.parse(window.localStorage.getItem('readingList')) || [];

export const READINGLIST_ACTION_TYPES = {
    ADD_TO_READING_LIST: 'ADD_TO_READING_LIST',
    REMOVE_FROM_READING_LIST: 'REMOVE_FROM_READING_LIST',
    CLEAR_READING_LIST: 'CLEAR_READING_LIST',
    RENDER_READING_LIST: 'RENDER_READING_LIST'
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('readingList', JSON.stringify(state))
}

export const readingListReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    
    switch (actionType) {
        case READINGLIST_ACTION_TYPES.ADD_TO_READING_LIST: {
            const { ISBN } = actionPayload;
            const itemInReadingList = state.find((element) => element.ISBN === ISBN)

            if(itemInReadingList) {
                return
            }
            
            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
            updateLocalStorage(newState)
            return newState
        }
        case READINGLIST_ACTION_TYPES.REMOVE_FROM_READING_LIST: {
            const { ISBN } = actionPayload;
            const newState = state.filter(element => element.ISBN !== ISBN)

            updateLocalStorage(newState)
            return newState

        }
        case READINGLIST_ACTION_TYPES.CLEAR_READING_LIST: {
            updateLocalStorage([])
            return []
        }
        case READINGLIST_ACTION_TYPES.RENDER_READING_LIST: {
            return actionPayload
        }
    }
    return state;
}