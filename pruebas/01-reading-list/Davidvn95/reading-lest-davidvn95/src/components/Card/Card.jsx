import React from "react";
import { useDispatch } from "react-redux";
import { addToReading, removeToReading } from "../../redux/booksSlice";
import Book from "../../data";
import "./Card.css";

const Card = ({ cover, isbn, readings, isReading }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (isReading) dispatch(removeToReading(isbn));
        else dispatch(addToReading(Book.getById(isbn)));
    };
    return (
        <div className="card">
            {readings && <span className="card-bookmark">En mi lista</span>}
            <img className="card-img" src={cover} alt="" onClick={handleClick} />
        </div>
    );
};

export default Card;
