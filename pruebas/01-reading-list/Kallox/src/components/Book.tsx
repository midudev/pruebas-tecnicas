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
    const onClick = () => {
        console.log("Clickeado")
    }
    return(
        <div className='rounded overflow-hidden shadow border-2 relative group'>
            <img className='w-64 h-96 group-hover:opacity-20' src={book.cover} alt={book.title} />
            <div className='opacity-0 group-hover:opacity-100 duration-700 absolute inset-x-0 top-0 h-full block'>
                <div className='p-4 justify-center items-center text-x text-white font-semibold h-5/6'>
                    <h1 className='uppercase text-xl mb-4 underline text-center'>{book.title}</h1>
                    <p className='text-gray-100 mb-1'>{book.synopsis}</p>
                    <p className='text-gray-100 mb-1'><span className='underline'>Páginas:</span> {book.pages}</p>
                    <p className='text-gray-100 mb-1'><span className='underline'>Año:</span> {book.year}</p>
                    <p className='text-gray-100 mb-1'><span className='underline'>Autor:</span> {book.author.name}</p>
                    <p className='text-gray-100 mb-1'><span className='underline'>Género:</span> {book.genre}</p>
                </div>
                <div className='items-center flex justify-center bg-slate-600 rounded-full mx-2 border-2 border-slate-500'>
                    <button onClick={onClick} className='text-white text-lg font-bold w-full h-full'>Lista de lectura</button>
                </div>
            </div>
        </div>
    )
}

export default Book;