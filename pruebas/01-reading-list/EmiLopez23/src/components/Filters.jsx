import { getGenresFromJson } from "../utils/BookUtils"

export default function Filters({handleFilters}){
    const genres = getGenresFromJson()

    function handleGenreFilterChange(event){
        handleFilters(prevState=>({...prevState,genre:event.target.value}))
      }
    
    function handleTitleFilterChange(event){
      handleFilters(prevState=>({...prevState,title:event.target.value}))
    }
    return <div className="filters">
        <input type='text' onChange={handleTitleFilterChange} placeholder='Harry Potter' className='input-text'/>
        <select onChange={handleGenreFilterChange} className='input-select'>
          <option value={""}>All</option>
          {genres.map((genre,idx)=><option key={idx} value={genre}>{genre}</option>)}
        </select>
    </div>
}