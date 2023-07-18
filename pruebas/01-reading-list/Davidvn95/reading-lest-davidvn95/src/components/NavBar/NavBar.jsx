import { useDispatch, useSelector } from "react-redux";
import { findBooks } from "../../redux/booksSlice";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        dispatch(findBooks(value));
    };
    return (
        <header className="navbar">
            <h1 className="title">
                <span className="title-light">good</span>reads
            </h1>
            <div className="search">
                <span>Encuentra tu proximo libro</span>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder={'ej: "Harry Potter" o "J.K. Rowling"'}
                />
            </div>
            <nav className="navbar-nav">
                <Link to="/">
                    <span>Inicio</span>
                </Link>
                <Link to="/mybooks">
                    <span>Mi Lista</span>
                </Link>
            </nav>
        </header>
    );
};

export default NavBar;
