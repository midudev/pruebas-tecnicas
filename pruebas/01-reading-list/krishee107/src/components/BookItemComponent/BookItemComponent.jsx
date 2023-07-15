import React, { useEffect, useState } from 'react';
import './BookItemComponent.css';

export const BookItemComponent = ({ book, selectedBooks, setSelectedBooks }) => {
    const [isSelected, setIsSelected] = useState(() => {
        // Verificar si el libro está en la lista de lectura
        return selectedBooks.some(selectedBook => selectedBook.book.title === book.title);
    });

    useEffect(() => {
        // Verificar si el libro está en la lista de lectura
        const isSelected = selectedBooks.some(selectedBook => selectedBook.book.title === book.title);
        setIsSelected(isSelected);
    }, [selectedBooks]);

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
    };

    return (
        <div
            className={`bookItem ${isSelected ? 'bookItemListed ' : ''}`}
            onClick={() => {
                handleReadingList();
            }}
        >
            {isSelected && <div className="bookCoverCopy" style={{ backgroundImage: `url(${book.cover})` }} />}
            <img className="bookCover" src={book.cover} alt={book.title} />
            <h2 className="bookTitle">{book.title}</h2>
            <div className="bookAuthor">
                Por <span className="bookAuthorName">{book.author.name}</span>
            </div>
        </div>
    );
};