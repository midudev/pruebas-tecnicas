import React from 'react'
import './ReadingListComponent.css';

export const ReadingListComponent = ({ readingListVisible, handleReadingList }) => {

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
                            <ul>
                                <li>Book 1</li>
                                <li>Book 2</li>
                                <li>Book 3</li>
                            </ul>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}
