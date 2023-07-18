import { FC } from 'react';
import { Book } from '../types';

interface Props {
    book: Book;
    saveBook?: (isbnBook: string) => void;
}

export const BookItem:FC<Props> = ({ book, saveBook }) => {
    return (
        <article className='library-book'>
            <img className='book-img' src={book.cover} alt={book.title} />
            
            <div className='book-info'>
            <h3 className='book-info__title'>{ book.title }</h3>
            <span className='book-info__author'>{ book.author.name }</span>
            <div className="book-info__buttons">
                {
                    saveBook && (
                        <button onClick={() => saveBook(book.ISBN)} className="book-info__buttons-save_to_read">Save to Read</button>
                    )
                }
            </div>
            </div> 
        </article>    
    )
}
