/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { readingListinitialState, readingListReducer, READINGLIST_ACTION_TYPES } from "../reducers/readingList.jsx";

export const ReadingListContext = createContext();

function useReadingListReducer () {
    const [state, dispatch] = useReducer(readingListReducer, readingListinitialState);
    const addToReadingList = readingList => dispatch({ 
        type: READINGLIST_ACTION_TYPES.ADD_TO_READING_LIST, 
        payload: readingList
    });

    const removeFromReadingList = readingList => dispatch({
        type: READINGLIST_ACTION_TYPES.REMOVE_FROM_READING_LIST,
        payload: readingList
    });

    const clearReadingList = () => dispatch({
        type: READINGLIST_ACTION_TYPES.CLEAR_READING_LIST
    });

    const renderReadingList = readingList => dispatch({
        type: READINGLIST_ACTION_TYPES.RENDER_READING_LIST,
        payload: readingList
    });

    const moveForwardItem = readingList => dispatch({
        type: READINGLIST_ACTION_TYPES.MOVE_FORWARD_ITEM,
        payload: readingList
    });
    
    const moveBackwardItem = readingList => dispatch({
        type: READINGLIST_ACTION_TYPES.MOVE_BACKWARD_ITEM,
        payload: readingList
    });
    
    return {state, addToReadingList, removeFromReadingList, clearReadingList, renderReadingList, moveForwardItem, moveBackwardItem}
}

export function ReadingListProvider({ children }) {    
    const { state, addToReadingList, removeFromReadingList, clearReadingList, renderReadingList, moveForwardItem, moveBackwardItem } = useReadingListReducer()

    return (
        <ReadingListContext.Provider value={{
            readingList: state,
            addToReadingList,
            removeFromReadingList,
            clearReadingList,
            renderReadingList,
            moveForwardItem,
            moveBackwardItem
        }}>
        {children}
        </ReadingListContext.Provider>
    )
}