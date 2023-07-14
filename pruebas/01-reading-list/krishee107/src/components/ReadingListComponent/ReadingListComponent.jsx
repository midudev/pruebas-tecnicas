import React from 'react'
import './ReadingListComponent.css';

export const ReadingListComponent = ({ readingListVisible }) => {

    return (
        <>
            {readingListVisible &&
                <div className="readingListContainer">
                    <div className="readingList">
                        <h2>Reading List</h2>
                        <ul>
                            <li>Book 1</li>
                            <li>Book 2</li>
                            <li>Book 3</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
