import { IAppState } from './AppProvider';
import { Book } from '../../types';

type IAppReducerAction = 
    | { type: 'set available/reading books', payload: { available: Book[], reading: Book[] } }
    | { type: 'set reading books', payload: Book[] }
    | { type: 'add for reading', payload: Book }
    | { type: 'remove from reading', payload: Book }

export const appReducer = (state: IAppState, action: IAppReducerAction): IAppState => {
    switch (action.type) {
        case 'set available/reading books':
            return {
                ...state,
                readingBooks: action.payload.reading,
                availableBooks: action.payload.available
            }

        case 'add for reading':
            return {
                ...state,
                availableBooks: state.availableBooks.filter(book => book.ISBN !== action.payload.ISBN),
                readingBooks: [action.payload, ...state.readingBooks]
            }

        case 'remove from reading':
            return {
                ...state,
                availableBooks: [action.payload, ...state.availableBooks],
                readingBooks: state.readingBooks.filter(book => book.ISBN !== action.payload.ISBN)
            }
        
        default:
            return state;
    }
}