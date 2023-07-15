import React from 'react';
import './ReadingListComponent.css';

export const ReadingListComponent = ({ readingListVisible, handleReadingList, selectedBooks }) => {
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
                            <h2>Reading List</h2>
                            <div className="readingListBooks">
                                {selectedBooks.map((selectedBook, index) => (
                                    <img
                                        key={selectedBook.book.title}
                                        className={`stackedBook cover${index + 1}`}
                                        style={{ marginTop: `${index * 10}%` }}
                                        src={selectedBook.book.cover}
                                        alt={selectedBook.book.title}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

