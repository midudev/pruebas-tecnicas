import { useEffect, useState } from 'react';
import { Book, onChangeStoreArgs } from '../interfaces/interfaces';


interface useBookArgs {
    book: Book;
    onChange?: ( args: onChangeStoreArgs) => void;
    value?: boolean;
}

export const useBook = ({ onChange, book, value = false}: useBookArgs) => {
  
    const [readingList, setReadingList] = useState( value );

    const readingListChange = (value: boolean) => {
        
        const newValue = !value;
        setReadingList( newValue );
        console.log(newValue);
        
        onChange && onChange({ readingList: newValue, book});
    }

    useEffect(() => {
        setReadingList( value );
    }, [ value ])
      
    return {
        readingList,
        readingListChange
    }
}
