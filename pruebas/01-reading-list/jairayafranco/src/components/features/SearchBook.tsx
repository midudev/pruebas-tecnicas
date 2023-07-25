import { useBookStore } from "../../store/useBookStore";
import Search from "../common/Search";

export default function SearchBook() {
    const { setFilterBookParams, filterParams } = useBookStore();

    return (
        <Search
            title="Filtrar por Nombre"
            value={filterParams.name ?? ""}
            placeholder="Frankenstein..."
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setFilterBookParams("name", e.target.value)}
        />
    );
}
