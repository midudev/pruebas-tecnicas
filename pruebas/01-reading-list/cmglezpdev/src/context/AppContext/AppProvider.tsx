import { FC, useEffect, useReducer } from 'react';
import { AppContext } from './AppContext';
import { appReducer } from './AppReducer';
import { Book } from '../../types';

interface IAppProvider {
    children: React.ReactNode;
}

export interface IAppState {
    availableBooks: Book[],
    readingBooks: Book[]
}

const INITIAL_STATE: IAppState = {
    availableBooks: [],
    readingBooks: []
}

export const AppProvider:FC<IAppProvider> = ({ children }) => {
    const [appState, dispatch] = useReducer(appReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('reading-books', JSON.stringify(appState.readingBooks));
    }, [appState]);

    useEffect(() => {
        dispatch({ type: 'load available books/reading books' });
    }, []);


    const addForReading = (book: Book) => {
        dispatch({ type: 'add for reading', payload: book });   
    }

    const removeFromReading = (book: Book) => {
        dispatch({ type: 'remove from reading', payload: book });
    }

    return (
        <AppContext.Provider value={{
            ...appState,
            addForReading,
            removeFromReading
        }}>
        { children }
        </AppContext.Provider>    
    )
}