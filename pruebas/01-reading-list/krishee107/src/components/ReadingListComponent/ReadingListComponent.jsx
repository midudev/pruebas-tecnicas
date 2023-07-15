import React from 'react';
import './ReadingListComponent.css';

export const ReadingListComponent = ({ readingListVisible, handleReadingList, selectedBooks, setSelectedBooks }) => {

    //Eliminamos el libro de la lista de lectura
    const removeBookFromReadingList = (book) => {
        const newSelectedBooks = selectedBooks.filter((selectedBook) => selectedBook.book.title !== book.book.title);
        setSelectedBooks(newSelectedBooks);
    };

    return (
        <>
            {readingListVisible && (
                <div className="readingListContainer">
                    <div className="readingList">
                        <div className="readingListHeader">
                            <h1>Mi lista de lectura</h1>
                            <div
                                className="closeButton"
                                onClick={() => {
                                    handleReadingList();
                                }}
                            >
                                X
                            </div>
                        </div>
                        <div className="readingListContent">
                            <div className="readingListBooks">
                                {selectedBooks.map((selectedBook, index) => (
                                    <div
                                        className={`stackedBook cover${index + 1}`}
                                        style={{ marginTop: `${index * 10}%` }}
                                        key={selectedBook.book.title}
                                    >
                                        <div className="stackedBookClose"
                                            onClick={() => removeBookFromReadingList(selectedBook)}>  X </div>
                                        <img
                                            key={selectedBook.book.title}
                                            src={selectedBook.book.cover}
                                            alt={selectedBook.book.title}
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

