import { useContext, CSSProperties } from 'react';
import { BookContext } from './BookCard';

export interface Props {
    className?: string;
    style?: CSSProperties;
    
}

export const BookButtons = ({ className, style }:Props) => {   

    const { readingList, addToReadingList } = useContext( BookContext );
    
    return (
        <div className="flex flex-col">
            <button
                className={ className }
                style={ style } 
                onClick={ () => addToReadingList(readingList) } 
            >{ readingList ? 'Remove' : 'Add to List'}</button>
        </div>
    )
}      