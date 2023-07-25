import React from "react";
import { useDispatch } from "react-redux";
import { addToReading, removeToReading } from "../../redux/booksSlice";
import Book from "../../data";
import "./Card.css";

const Card = ({ cover, isbn, readings, isReading, title, synopsis }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (isReading) dispatch(removeToReading(isbn));
        else dispatch(addToReading(Book.getById(isbn)));
    };
    return (
        <div className="card" onClick={handleClick}>
            {readings && <span className="card-bookmark">En mi lista</span>}
            <img className="card-img" src={cover} alt=""  />
            {title && <div className="card-content">
                <p className="card-title">{title}</p>
                <p className="card-description">{synopsis}</p>
            </div>}
        </div>
    );
};

export default Card;
