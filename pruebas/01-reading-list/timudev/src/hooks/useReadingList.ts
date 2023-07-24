import { useState, useEffect } from 'react';
import { Book, BookInReadingList, StorageEvent } from '../interfaces/interfaces';


export const useReadingList = () => {

    const readingListInitial = localStorage.getItem('readingList');
  
    const [readingList, setReadingList] = useState<{ [key:string]:BookInReadingList }>( readingListInitial ? JSON.parse(readingListInitial) : {} );

    const onBookReadingChange = ( {readingList, book}: { readingList: boolean, book: Book} ) => {

        setReadingList( prev => {

            if ( readingList === false) {
                const {[book.ISBN]: toDeleted, ...rest } = prev;
                return rest;
            }

            return {
                ...prev,
                [book.ISBN]: { ...book, readingList: readingList}
            }
        
        });
    };

    useEffect(() => {
         localStorage.setItem('readingList', JSON.stringify(readingList));
    }, [readingList])

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
          if (e.key === 'readingList') {
            setReadingList(JSON.parse(e.newValue!));
          }
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);
  
    return {
        readingList,
        onBookReadingChange
    }
}
