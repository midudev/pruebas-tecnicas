import { useSelector } from "react-redux";
import "./LateralBar.css";
export default function Lateral() {
    const authors = useSelector(status => status.books?.authors)
    const genres = useSelector(status => status.books?.genres)
    return (
        <section className="lateral">
            <h2>Lateral</h2>
            <div className="select">
                <label htmlFor="author">Author</label>
                <select name="author" defaultValue='All authors'>
                    <option value="all" >All authors</option>
                    {authors?.map((author, index)=><option key={index} value={author.name}>{author.name}</option>)}
                </select>
            </div>
            <div className="select">
                <label htmlFor="genre">Genre</label>
                <select name="genre" defaultValue='All genres'>
                    <option value="all" >All genres</option>
                    {genres?.map((genre, index)=><option key={index} value={genre}>{genre}</option>)}
                </select>
            </div>
        </section>
    );
}
