export const readingListinitialState = JSON.parse(window.localStorage.getItem('readingList')) || [];

export const READINGLIST_ACTION_TYPES = {
    ADD_TO_READING_LIST: 'ADD_TO_READING_LIST',
    REMOVE_FROM_READING_LIST: 'REMOVE_FROM_READING_LIST',
    CLEAR_READING_LIST: 'CLEAR_READING_LIST',
    RENDER_READING_LIST: 'RENDER_READING_LIST',
    MOVE_FORWARD_ITEM : 'MOVE_FORWARD_ITEM',
    MOVE_BACKWARD_ITEM : 'MOVE_BACKWARD_ITEM'
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('readingList', JSON.stringify(state))
}

export const readingListReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;    
    
    switch (actionType) {
        case READINGLIST_ACTION_TYPES.ADD_TO_READING_LIST: {            
            const { id } = actionPayload;            
            const itemInReadingList = state.find((element) => element.id === id)

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
            const { id } = actionPayload;
            const newState = state.filter(element => element.id !== id)

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
        case READINGLIST_ACTION_TYPES.MOVE_FORWARD_ITEM: {
            const { id } = actionPayload;
            let newState = structuredClone(state)            

            const oldIndex = state.findIndex(element => element.id === id)
            const newIndex = oldIndex + 1;            

            if(newIndex === newState.length){
                return state
            }

            let k;

            if(newIndex >= newState.length){
                k = newIndex - newState.length+1;
            }
            while(k--)
            newState.push(undefined);
            newState.splice(newIndex,0, newState.splice(oldIndex,1)[0]);            
            
            updateLocalStorage(newState)
            return newState
        }
        case READINGLIST_ACTION_TYPES.MOVE_BACKWARD_ITEM: {
            const { id } = actionPayload;
            let newState = structuredClone(state)            

            const oldIndex = state.findIndex(element => element.id === id)
            const newIndex = oldIndex - 1;

            if(newIndex === -1){
                return state
            }

            let k;

            if(newIndex >= newState.length){
                k = newIndex - newState.length+1;
            }
            while(k--)
            newState.push(undefined);
            newState.splice(newIndex,0, newState.splice(oldIndex,1)[0]);            
            
            updateLocalStorage(newState)
            return newState
        }
    }
    return state;
}