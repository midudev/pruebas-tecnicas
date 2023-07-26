import { useDispatch } from "react-redux";
import { findBooks } from "../../redux/booksSlice";
import { Link } from "react-router-dom";
import Lateral from "../LateralBar/LateralBar";


export default function SearchBar({ classNav, classSearch, classLinks, size, setOpen }) {
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
