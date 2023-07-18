import { useContext, CSSProperties } from 'react';
import { BookContext } from './BookCard';

import styles from '../styles/styles.module.css';

export interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const BookTitle = ({ title, className, style }: Props) => {

    const { book } = useContext( BookContext );
    
    return (
        <span 
            className={ `${styles.productDescription} ${ className ? className : '' }` }
            style={ style }
        >
            { title ? title : book.title }
        </span>
    )
}