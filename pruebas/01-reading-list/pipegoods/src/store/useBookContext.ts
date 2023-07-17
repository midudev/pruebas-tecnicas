import { useContext } from 'react';
import { BookContext } from './BookContext';

export const useBookContext = () => {
    const context = useContext(BookContext);

    if (!context) {
        throw new Error('useBookContext debe estar dentro del proveedor BookProvider');
    }

    return context;
};
