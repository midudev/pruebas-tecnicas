import { BookContext } from '@/context/bookContext';
import { useContext } from 'react';

const useBookContext = () => useContext(BookContext);

export default useBookContext;
