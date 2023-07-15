import React, { useState } from 'react'
import './BookItemComponent.css';

export const BookItemComponent = ({ book, selectedBooks, setSelectedBooks }, key) => {
    const [isSelected, setIsSelected] = useState(() => {
        // Verificar si el libro está en la lista de lectura
        return selectedBooks.some(selectedBook => selectedBook.book.title === book.title);
    });

    const handleReadingList = () => {
        setIsSelected(!isSelected);
        // Si el libro está en la lista de lectura, lo eliminamos
        if (isSelected) {
            const newSelectedBooks = selectedBooks.filter(selectedBook => selectedBook.book.title !== book.title);
            setSelectedBooks(newSelectedBooks);
        } else {
            // Si el libro no está en la lista de lectura, lo añadimos
            setSelectedBooks([...selectedBooks, { book }]);
        }
    }

    return (
        <div key={key} className={`bookItem ${isSelected ? 'bookItemListed ' : ''}`}
            onClick={() => {
                handleReadingList();
            }}
        >
            <img className="bookCover" src={book.cover} alt={book.title} />
            <h2 className='bookTitle'>{book.title}</h2>
            <div className='bookAuthor'>
                Por <span className='bookAuthorName'>{book.author.name}</span>
            </div>
        </div>
    )
}
