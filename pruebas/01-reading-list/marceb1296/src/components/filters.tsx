import { IFiltersProps } from "../interfaces";
import "../css/filters.scss";

export const Filters = ({handleFilters, filterValues, filterInputValues}: IFiltersProps) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        
        const {name, value} = e.target;
        
        handleFilters(({setFilterByYear, setFilterByPage, setFilterByGenre}) => {
            
            if (name.startsWith("year")) {
                const [_, type] = name.split("-");
                setFilterByYear(prev => {
                    return {
                        ...prev,
                        [type]: Number(value)
                    }
                })
                
            }
        
            if (name === "pages") {
                setFilterByPage(Number(value))
            }
            
            if (name ===  "genre") {
                setFilterByGenre(value)
            }
        })
        
        
    }
    
    return(
        <section className="filters">
            <label className="with-color">
                Filtrar por:
            </label>
            <div className="filters-container">
                
                { /* Todo: add filter validators*/}
                
                <label className="with-color filter-input">
                    Paginas: {filterValues.pages}
                    <input onChange={handleChange} name="pages" value={filterValues.pages} type="range" min={0} max={filterInputValues.pages} />
                </label>
                { /*
                <label className="with-color">
                    Año
                    <input onChange={handleChange} name="year-min" value={filterValues.year.min || ""} type="number" placeholder={`Año Minimo ${filterInputValues.year.min}`} />
                    <input onChange={handleChange} name="year-max" value={filterValues.year.max || ""} type="number" placeholder={` Año Maximo ${filterInputValues.year.max}`} />
                </label>
                */}
                <label className="with-color filter-input">
                    Genero:
                    <select name="genre" onChange={handleChange} value={filterValues.genre}>
                        {
                            filterInputValues.genre.map(el =>
                                <option value={el}>{el}</option>
                            )
                        }
                    </select>
                </label>
            </div>
        </section>
    )
}