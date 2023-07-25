import { useDispatch, useSelector } from "react-redux";
import { findBooks } from "../../redux/booksSlice";
import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Lateral from "../LateralBar/LateralBar";

function SearchNav({ classNav, classSearch, classLinks, size, setOpen }) {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const { value } = event.target;
        dispatch(findBooks(value));
    };
    return (
        <div className={classNav}>
            <nav className={classLinks}>
                <Link to="/" onClick={() => setOpen(false)}>
                    <span>Inicio</span>
                </Link>
                <Link to="/mybooks" onClick={() => setOpen(false)}>
                    <span>Mi Lista</span>
                </Link>
            </nav>
            <div className={classSearch}>
                <span>Encuentra tu proximo libro</span>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder={'ej: "Harry Potter" o "J.K. Rowling"'}
                />
            </div>
            {size <= 768 && <Lateral />}
        </div>
    );
}

function NavBarMobile({size}) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className="mobile">
            {open && <SearchNav classNav="mobile-nav" classSearch="mobile-search" classLinks="mobile-links" size={size} setOpen={setOpen} />}
            <button
                className={"menu" + (open ? " opened" : "")}
                onClick={handleClick}
                aria-label="Main Menu"
                aria-expanded={open ? "opned" : "closed"}>
                <svg width="50" height="50" viewBox="0 0 100 100">
                    <path
                        className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                    />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path
                        className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                    />
                </svg>
            </button>
        </div>
    );
}

const NavBar = () => {
    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <header className="navbar">
            <h1>
                <span className="title-light">good</span>reads
            </h1>

            {/* <SearchNav /> */}

            {size <= 768 ? (
                <NavBarMobile size={size} />
            ) : (
                <SearchNav
                    classNav="search-nav"
                    classSearch="search"
                        classLinks="navbar-nav"
                        size={size}
                />
            )}
        </header>
    );
};

export default NavBar;
