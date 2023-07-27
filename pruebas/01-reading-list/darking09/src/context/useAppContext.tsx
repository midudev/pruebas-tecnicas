import { useContext } from 'react'
import LibraryContext from '@context/LibraryContext'

function useAppContext() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error('useAppContext must be used within a LibraryProvider');
  }
  return context;
}

export default useAppContext
