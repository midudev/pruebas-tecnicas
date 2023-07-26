import React, { useLayoutEffect, useState } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import MobileMenu from "../MobileMenu/MobileMenu";



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

            {size <= 768 ? (
                <MobileMenu size={size} />
            ) : (
                <SearchBar
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
