import { useContext, CSSProperties } from 'react';
import { BookContext } from './BookCard';

export interface Props {
    className?: string;
    style?: CSSProperties;
    
}

export const BookButtons = ({ className, style }:Props) => {   

    const { readingList, addToReadingList } = useContext( BookContext );
    
    return (
        <div 
            className={ `${ className ? className : '' }`}
            style={ style }
        >
            <button 
                onClick={ () => addToReadingList(readingList) } 
            >{ readingList ? 'Remove' : 'Add to List'}</button>
        </div>
    )
}      