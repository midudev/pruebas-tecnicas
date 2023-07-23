import { useEffect, useState } from "react";
import { selectedGenre } from "../services/nanostores";
import "./../dropdown.css";

interface Props {
    options: string[];
    filter: (genre: string) => void;
}

const DropdownMenu = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [genre, setGenre] = useState<string>("");

    // Cada vez que ocurra un cambio en el estado de genre, se llama a la función de filtrado
    useEffect(() => {
        props.filter(genre);
    }, [genre]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (e: React.MouseEvent<HTMLLIElement>) => {
        const genreSelected = String(e.currentTarget.textContent);
        setIsOpen(!isOpen);
        setGenre(genreSelected);
        selectedGenre.set(genreSelected);
    };

    return (
        <div className="dropdown-container">
            <button
                className="btn"
                onClick={toggleMenu}
            >
                {genre === "" ? "Select an genre" : genre}
            </button>
            <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    {props.options.map((option: string, i: number) => {
                        return (
                            <li
                                className="option px-1"
                                key={i}
                                onClick={(e) => selectOption(e)}
                            >
                                {option}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;
