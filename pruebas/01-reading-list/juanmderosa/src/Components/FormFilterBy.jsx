import React from 'react'

export const FormFilterBy = ({setFilterType}) => {

  const handleFilterBy = (e) =>{
    setFilterType(e.target.value)
  }

  
  return (
    <form onChange={(e)=>handleFilterBy(e)} className="filterBy-form">
        <label>Filtrar por: </label>
        <label htmlFor="filterbypages">Todos</label>
        <input type="radio" name="filterType" id="nofilter" value="nofilter"/>
        <label htmlFor="filterbypages">Cantidad de páginas</label>
        <input type="radio" name="filterType" id="filterbypages" value="filterbypages"/>
        <label htmlFor="filterbygenre">Género</label>
        <input type="radio" name="filterType" id="filterbygenre" value="filterbygenre"/>
</form>
  )
}
