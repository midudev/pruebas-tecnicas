import { useAvailableBooksContext } from "../context/AvailableBooksContext"
import { getGenresFromJson } from "../utils/BookUtils"

export default function Filters(){
    const genres = getGenresFromJson()
    const {filterByGenre,filterByTitle} = useAvailableBooksContext()

    function handleGenreFilterChange(event){
        filterByGenre(event.target.value)
      }
    
    function handleTitleFilterChange(event){
        filterByTitle(event.target.value)
    }
    return <div className="filters">
        <input type='text' onChange={handleTitleFilterChange} placeholder='Harry Potter' className='input-text'/>
        <select onChange={handleGenreFilterChange} className='input-select'>
          <option value={""}>All</option>
          {genres.map((genre,idx)=><option key={idx} value={genre}>{genre}</option>)}
        </select>
    </div>
}