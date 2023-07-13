import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header className="navbar">
            <h1 className="title">
                <span className="title-light">good</span>reads
            </h1>
            <nav className="navbar-nav">
                <Link to="/" className="link">
                    <span>Home</span>
                </Link>
                <span>My lectures</span>
            </nav>
        </header>
    );
};

export default NavBar;
