import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToReading, removeToReading } from "../../redux/booksSlice";
import Book from "../../data";
import "./Card.css";

const Card = ({ cover, title, isbn }) => {
    const dispatch = useDispatch();

    const [isReading, setIsReading] = useState(false);

    const handleClick = () => {
      if (!isReading) dispatch(addToReading(Book.getById(isbn)));
      if (isReading) dispatch(removeToReading(isbn));
      setIsReading(!isReading)      
    };
    return (
        <div className="card" onClick={handleClick}>
            <img className="card-img" src={cover} alt="" />
        </div>
    );
};

export default Card;
