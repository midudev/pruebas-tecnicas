import { useContext, CSSProperties } from 'react';
import { BookContext } from './BookCard';

export interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const BookTitle = ({ title, className, style }: Props) => {

    const { book } = useContext( BookContext );
    
    return (
        <span 
            className={ `${ className ? className : '' }` }
            style={ style }
        >
            { title ? title : book.title }
        </span>
    )
}