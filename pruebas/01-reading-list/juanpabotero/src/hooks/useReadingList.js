import { useContext } from 'react';
import { ReadingListContext } from '../context/reading-list.jsx';

export const useReadingList = () => {
  const context = useContext(ReadingListContext);

  /* Que devuelva undefined quiere decir que estoy usando el customHook
  en un sitio que no puedo, porq esa parte de la aplicación no esta
  envuelta en un provider */
  if (context === undefined) {
    throw new Error('useReadingList must be used within a ReadingListProvider');
  }

  return context;
};
