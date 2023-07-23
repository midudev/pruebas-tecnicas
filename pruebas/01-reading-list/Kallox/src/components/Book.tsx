import React from 'react';

interface Book{
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author:{
        name: string;
        otherBooks: string[];
    };
}

interface BookProps{
    book: Book;
}

const Book: React.FC<BookProps> = ({book}) => {
    return(
        <div className='rounded overflow-hidden shadow border-2'>
            <img className='w-64 h-96' src={book.cover} alt={book.title} />
        </div>
    )
}

export default Book;