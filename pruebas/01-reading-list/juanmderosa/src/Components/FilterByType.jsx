import React from 'react'

export const FilterByType = ({handleFilteredByPages, maxPages, pagesValue}) => {
  return (
    <div className='filterBy-pages'>
    <label htmlFor="pages-range">Cantidad de páginas</label>
    <input type="range" name="pages-range" id="pages-range" min="0" max={maxPages} value={pagesValue} step="1" onChange={(e)=>handleFilteredByPages(e)} />
    <output name="result">{pagesValue}</output>
    </div>

  )
}
