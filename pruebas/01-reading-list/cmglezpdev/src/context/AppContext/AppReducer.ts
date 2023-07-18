import { IAppState } from './AppProvider';
import BOOKS_JSON from '../../../../books.json';
import { Book } from '../../types';

type IAppReducerAction = 
    | { type: 'load available books' }
    | { type: 'load books for reading' }
    | { type: 'add for reading', payload: Book }
    | { type: 'remove from reading', payload: Book }

export const appReducer = (state: IAppState, action: IAppReducerAction): IAppState => {
    switch (action.type) {
        case 'load available books':
            return {
                ...state,
                availableBooks: BOOKS_JSON.library.map(library => library.book)
                .filter(book => !state.readingBooks.includes(book))
            }
        case 'load books for reading':
            return {
                ...state,
                readingBooks: JSON.parse(localStorage.getItem('reading-books') || '[]')
            }

        case 'add for reading':
            return {
                ...state,
                availableBooks: state.availableBooks.filter(book => book !== action.payload),
                readingBooks: [action.payload, ...state.readingBooks]
            }

        case 'remove from reading':
            return {
                ...state,
                availableBooks: [action.payload, ...state.availableBooks],
                readingBooks: state.readingBooks.filter(book => book !== action.payload)
            }
        
        default:
            return state;
    }
}