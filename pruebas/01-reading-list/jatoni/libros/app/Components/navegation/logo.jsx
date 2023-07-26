import { Link } from "@remix-run/react"
import logoImage from "../../../public/logo/open-book.png";

export default function logo() {
    return (
        <ul>
            <li>
                <Link to="/"><img src={logoImage} alt="Logo de Books" /></Link>
            </li>
        </ul>
    )
}