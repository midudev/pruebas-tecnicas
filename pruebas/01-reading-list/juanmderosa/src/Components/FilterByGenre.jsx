import { OptionGenreList } from './OptionGenreList'

export const FilterByGenre = ({genreList, handleFilteredByGenre}) => {
  return (
    <div className='filterBy-pages'>
      <label htmlFor="gender-filter"> Filtrar por Género: </label>
      <select name="gener-filter" id="gender-filter" onChange={(e)=>handleFilteredByGenre(e)}>
          <option value="all">---</option>
          <OptionGenreList genreList={genreList}/>
        </select>
    </div>

  )
}
