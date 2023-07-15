import React, { useEffect, useState } from 'react'
import './navComponent.css';

export const NavComponent = ({ handleReadingList, selectedBooks }) => {
    const [readingListCount, setReadingListCount] = useState(0);

    useEffect(() => {
        setReadingListCount(selectedBooks.length);
    }, [selectedBooks]);

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
