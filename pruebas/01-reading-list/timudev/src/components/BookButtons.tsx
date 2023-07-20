import { useContext, CSSProperties } from 'react';
import { BookContext } from './BookCard';

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties;
    
}

export const BookButtons = ({ className, style }:Props) => {   

    const { readingList, addToReadingList } = useContext( BookContext );
    
    return (
        <div 
            className={ `${styles.buttonsContainer} ${ className ? className : '' }`}
            style={ style }
        >
            <button 
                className={ styles.buttonAdd} onClick={ () => addToReadingList(readingList) } 
            >{ readingList ? '-' : '+'}</button>
        </div>
    )
}      