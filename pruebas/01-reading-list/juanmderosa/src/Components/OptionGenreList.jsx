import React from 'react'

export const OptionGenreList = ({genreList}) => {
  return (
    <>
        {genreList && genreList.map((genre, index)=>
        <option key={index} value={genre}>{genre}</option>
        )} 
    </>

  )
}
