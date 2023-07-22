import { useState } from "react";
import "./../dropdown.css";

interface Props {
    options: string[];
}

const DropdownMenu = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                        return <li key={i}>{option}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;
