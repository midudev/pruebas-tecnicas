import { FC, useEffect, useReducer, useRef } from 'react';
import { AppContext } from './AppContext';
import { appReducer } from './AppReducer';
import { Book } from '../../types';
import BOOKS_JSON from '../../../data/books.json';

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
    const firstRef = useRef(true);

    const setData = () => {
        const allBooks: Book[] = BOOKS_JSON.library.map(library => library.book);
        const reading: Book[] = JSON.parse(localStorage.getItem("reading-books") || "[]");
        const available: Book[] = allBooks.filter(book => !reading.some(rd => rd.ISBN === book.ISBN));
        
        dispatch({ type: "set available/reading books", payload: { available, reading } });
    }

    document.onvisibilitychange = () => {
        // console.log("✅ Visibility Change");
        setData();
    }
    
    window.onfocus = () => {
        // console.log("✅ Focused");
        setData();
    }

    useEffect(() => {
        setData();
    }, []);

    useEffect(() => {
        if(firstRef.current === false)
            localStorage.setItem('reading-books', JSON.stringify(appState.readingBooks));
        firstRef.current = false;
    }, [appState.readingBooks]);

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