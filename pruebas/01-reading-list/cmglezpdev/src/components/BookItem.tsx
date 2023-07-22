import { FC, useContext } from 'react';
import { Book } from '../types';
import { AppContext } from '../context/AppContext';

import '../styles/BookItem.css';

interface Props {
    book: Book;
    addBook?: boolean;
    removeBook?: boolean;
}

export const BookItem:FC<Props> = ({ book, addBook, removeBook }) => {
   
    const { addForReading, removeFromReading } = useContext(AppContext);
   
    return (
        <article className='library__book'>
            <div className='book__mark' onClick={() => addBook ? addForReading(book) : removeFromReading(book)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                     className="mark__icon mark__icon--save"
                     style={{ opacity: addBook ? 1 : 0 }} 
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                                
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                     className="mark__icon mark__icon--saved"
                     style={{ opacity: removeBook ? 1 : 0 }} 
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>                
            </div>
            <img className='book__img' src={book.cover} alt={book.title} />
            
            <div className='book__info'>
                <h3 className='info__title'>{ book.title }</h3>
                <span className='info__author'>{ book.author.name }</span>
            </div> 
        </article>    
    )
}
