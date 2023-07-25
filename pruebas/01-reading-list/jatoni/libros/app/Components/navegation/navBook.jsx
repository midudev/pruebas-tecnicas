import { Link } from "@remix-run/react";
import { FaShoppingCart } from 'react-icons/fa';

export default function NavBook() {
    return (
        <ul className="nav-container">
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link to="/shop">
                    <FaShoppingCart />
                </Link>
            </li>
            <li></li>
        </ul>
    );
}