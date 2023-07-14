import React from 'react'
import './navComponent.css';

export const NavComponent = ({ handleReadingList }) => {

    const handleReadingListClick = () => {
        handleReadingList();
    }

    return (
        <nav>
            <div className="navItem" onClick={handleReadingListClick}>
                <i className="fa-regular fa-bookmark"></i>
            </div>
        </nav>
    )
}
