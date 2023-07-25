import Dropdown from "../common/Dropdown";
import { useBookStore } from "../../store/useBookStore";

export default function GenreDropdown() {
    const { getBookGenres, setFilterBookParams, filterParams } = useBookStore();
    const genresList = getBookGenres();

    return (
        <Dropdown
            title="Filtrar por Genero"
            onChange={(e) => setFilterBookParams("genre", e.target.value)}
            value={filterParams.genre ?? ""}
            options={genresList}
        />
    )
}
