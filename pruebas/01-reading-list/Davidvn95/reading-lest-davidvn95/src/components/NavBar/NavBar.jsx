import { useDispatch, useSelector } from 'react-redux';
import {findBooks} from '../../redux/booksSlice'
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const reading = useSelector(state => state.books?.reading); 

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        dispatch(findBooks(value));
    }
    return (
        <header className="navbar">
            <h1 className="title">
                <span className="title-light">good</span>reads
            </h1>
            <div className='search'>
                <span> Meet your next book</span>
                <input type="text" onChange={handleChange} placeholder="Search for title or author" />
            </div>
            <nav className="navbar-nav">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to='/'>
                <span>My Books: <span className='count'>{reading.length}</span></span>
                </Link>
            </nav>
        </header>
    );
};

export default NavBar;
