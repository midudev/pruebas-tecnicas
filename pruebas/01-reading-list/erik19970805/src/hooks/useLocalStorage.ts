import { useBookStore } from '@store/bookStore';
import { useEffect } from 'react';

export const useLocalStorage = () => {
  const { addBooks } = useBookStore();
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'cartBooks') {
        try {
          const newCartBooks = JSON.parse(event.newValue ?? '[]') ?? [];
          addBooks(newCartBooks);
        } catch (error) {
          console.error('Error parsing data from storage event:', error);
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [addBooks]);
  return {};
};
