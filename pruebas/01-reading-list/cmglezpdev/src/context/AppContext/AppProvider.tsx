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
        dispatch({ type: 'load books for reading' })
        dispatch({ type: 'load available books' });
    }, []);


    const addForReading = (book: Book) => {
        dispatch({ type: 'add for reading', payload: book });
        localStorage.setItem('reading-books', JSON.stringify(appState.readingBooks));
    }

    const removeFromReading = (book: Book) => {
        dispatch({ type: 'remove from reading', payload: book });
        localStorage.setItem('reading-books', JSON.stringify(appState.readingBooks));
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