import React from 'react'
import './ReadingListComponent.css';

export const ReadingListComponent = ({ readingListVisible, handleReadingList, selectedBooks }) => {

    return (
        <>
            {readingListVisible &&
                <div className="readingListContainer">
                    <div className="readingList">
                        <div className="readingListHeader">
                            <h1>Mi lista de lectura</h1>
                            <div className="closeButton"
                                onClick={() => {
                                    handleReadingList();
                                }}
                            >X</div>
                        </div>
                        <div className="readingListContent">
                            <h2>Reading List</h2>
                            <div className="readingListBooks">
                                {selectedBooks.length > 0 ?
                                    selectedBooks.map((book, index) => {
                                        return (
                                            <div key={index} className="readingListBook">
                                                <img src={book.book.cover} alt={book.book.title} />
                                            </div>
                                        )
                                    })
                                    :
                                    <div className="readingListBook">No hay libros en tu lista de lectura</div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}
