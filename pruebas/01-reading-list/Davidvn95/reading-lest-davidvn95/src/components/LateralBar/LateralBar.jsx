import { useDispatch, useSelector } from "react-redux";
import "./LateralBar.css";
import { filerByGenre, filterByRange } from "../../redux/booksSlice";
import { useState } from "react";

export default function Lateral() {
    const authors = useSelector((status) => status.books?.authors);
    const genres = useSelector((status) => status.books?.genres);

    const [valueRange, setValueRange] = useState(0);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        
        const { value, name } = event.target;
        if(name === 'range') dispatch(filterByRange(value))
        else dispatch(filerByGenre(value));
    };

    const handleRange = (event) => {
        const { value } = event.target;
        setValueRange(value);
    };

    return (
        <section className="lateral">
            <h2>Lateral</h2>
            <div className="select">
                <label htmlFor="genre">Genre</label>
                <select id="genre" defaultValue="All genres" onChange={handleChange}>
                    <option value="All genres">All genres</option>
                    {genres?.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="range">
                <label htmlFor="pages">Pages</label>
                <div>
                    <input
                        name="range"
                        type="range"
                        id="pages"
                        onChange={handleChange}
                        max={1500}
                        onInput={handleRange}
                        defaultValue={valueRange}
                    />
                    <span>{valueRange}</span>
                </div>
            </div>
        </section>
    );
}
