import { useState } from "react";
import { selectedGenre } from "../services/selectGenre";
import "./../dropdown.css";

interface Props {
    options: string[];
}

const DropdownMenu = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (e: React.MouseEvent<HTMLLIElement>) => {
        setIsOpen(!isOpen);
        selectedGenre.set(String(e.currentTarget.textContent));
    };

    return (
        <div className="dropdown-container">
            <button
                className="btn"
                onClick={toggleMenu}
            >
                Genres
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
