import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToReading, removeToReading } from "../../redux/booksSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import bookMark from '../../assets/bookMark.svg'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'
import Book from "../../data";
import "./Card.css";

const Card = ({ cover, title, isbn }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
    dispatch(addToReading(Book.getById(isbn)));
    };
    return (
        <div className="card">
            {/* <object data={bookMark} type="" className="icon"></object> */}
            <FontAwesomeIcon icon={faBookmark} className={"icon"} onClick={handleClick} />
            {/* <img src={bookMark} alt="" className="icon" onClick={handleClick} /> */}
            {/* <svg className="icon" onClick={handleClick} viewBox="0 0 24 24"><path>{bookMark}</path></svg> */}
            <img className="card-img" src={cover} alt="" />
        
        </div>
    );
};

export default Card;
