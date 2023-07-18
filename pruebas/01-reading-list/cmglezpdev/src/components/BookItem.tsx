import { FC, useContext } from 'react';
import { Book } from '../types';
import { AppContext } from '../context/AppContext';

interface Props {
    book: Book;
    addForReadingButton?: boolean;
    removeFromReadingButton?: boolean;
}

export const BookItem:FC<Props> = ({ book, addForReadingButton, removeFromReadingButton }) => {
   
    const { addForReading, removeFromReading } = useContext(AppContext);
   
    return (
        <article className='library-book'>
            <img className='book-img' src={book.cover} alt={book.title} />
            
            <div className='book-info'>
                <h3 className='book-info__title'>{ book.title }</h3>
                <span className='book-info__author'>{ book.author.name }</span>
                <div className="book-info__buttons">
                    { addForReadingButton && (
                        <button onClick={() => addForReading(book)} className="book-info__buttons-save_to_read">Add For Reading</button>
                    )}

                    { removeFromReadingButton && (
                        <button onClick={() => removeFromReading(book)} className="book-info__buttons-save_to_read">Remove From Reading</button>
                    )}
                </div>
            </div> 
        </article>    
    )
}
