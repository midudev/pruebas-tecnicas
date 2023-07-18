import { useState } from 'react';
import { Book, BookInReadingList } from '../interfaces/interfaces';

export const useReadingList = () => {
  
    const [readingList, setReadingList] = useState<{ [key:string]:BookInReadingList }>({});

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
  
    return {
        readingList,
        onBookReadingChange
    }
}
