import { useDispatch, useSelector } from "react-redux";
import "./LateralBar.css";
import { filerByGenre, filterByRange } from "../../redux/booksSlice";

export default function Lateral() {
    const genres = useSelector((status) => status.books?.genres);
    const counters = useSelector((status) => status.books?.counters);
    const genreFilter = useSelector((status) => status.books?.genreFilter);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === "range") dispatch(filterByRange(value));
        else dispatch(filerByGenre(value));
    };

    return (
        <section className="lateral">
            <h2>Filtros</h2>
            <div className="range">
                <label htmlFor="pages">N° Páginas</label>
                <div>
                    <input
                        className="range-input"
                        name="range"
                        type="range"
                        id="pages"
                        max={1500}
                        onChange={handleChange}
                        value={counters.numPages}
                    />
                    <span>{counters.numPages}</span>
                </div>
            </div>
            <div className="select">
                <label htmlFor="genre">Genero</label>
                <select id="genre" onChange={handleChange} value={genreFilter} >
                    <option value="All genres">Todos</option>
                    {genres?.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="counters">
                {counters.byGenre !== counters.total && (
                    <div>
                        <span>Libros en este genero:</span>
                        <span className="count">{counters?.byGenre}</span>
                    </div>
                )}
                <div>
                    <span>Total Libros:</span>
                    <span className="count">{counters?.total}</span>
                </div>
                <div>
                    <span>Mi lista de lectura:</span>
                    <span className="count">{counters.readings}</span>
                </div>
            </div>
        </section>
    );
}
