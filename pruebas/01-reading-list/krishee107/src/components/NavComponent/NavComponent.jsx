import React, { useState } from 'react'
import './navComponent.css';

export const NavComponent = ({ handleReadingList }) => {
    const [readingListCount, setReadingListCount] = useState(0);

    const handleReadingListClick = () => {
        handleReadingList();
    }

    return (
        <nav>
            <div className="navItem" onClick={handleReadingListClick}>
                <i className="fa-regular fa-bookmark"></i>
                {readingListCount > 0 && <span className="readingListCount">{readingListCount}</span>
                }
            </div>
        </nav>
    )
}
