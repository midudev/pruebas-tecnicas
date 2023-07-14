import { useId } from "react"
import useFilters from "../hooks/useFilters"

export default function Filters() {
    const categoryFilterId = useId()
    const { filters, changeFilters } = useFilters()
    const handleChangeCategory = (event) => {
        const category = event.target.value
        changeFilters({ ...filters, category })
    }
    return (
        <div>
            <label htmlFor={categoryFilterId}>Categoría</label>
            <select defaultValue={filters.category} id={categoryFilterId} onChange={handleChangeCategory} >
                <option value='all'>Todas</option>
                <option value='Fantasía'>Fantasía</option>
                <option value='Zombies'>Zombies</option>
                <option value='Terror'>Terror</option>
            </select>
        </div>
    )
}