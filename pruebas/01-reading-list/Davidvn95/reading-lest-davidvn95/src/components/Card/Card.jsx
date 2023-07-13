import React, { useState } from 'react'
import './Card.css'

const Card = ({cover}) => {
  return (
    <div className='card'>
      <img className='card-img' src={cover} alt="" />
    </div>
  )
}

export default Card