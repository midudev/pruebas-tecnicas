import { useContext, CSSProperties } from 'react';
import { BookContext } from './BookCard';

import noImage from '../assets/no-image.jpg';


export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export const BookImage = ({ img = '', className, style }:Props) => {

    const { book } = useContext( BookContext );

    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    }   else {  
        imgToShow = book.cover ? book.cover : noImage;
    }

    return (
        <img 
            className={ `${ className ? className : '' }` }
            style={ style } 
            src={ imgToShow } 
            alt="Product" 
        /> 
    )
}