import './detail.css'
import { useState } from 'react'
// MUI
import Rating from '@mui/material/Rating'

export default function Detail({ product }) {
  const [thumbnail, setThumbnail] = useState(product.thumbnail)

  const handleMouseOver = (e) => {
    setThumbnail(e.target.src)
  }

  const handleMouseOut = () => {
    setThumbnail(product.thumbnail)
  }

  return (
    <>
      <div className='row'>
        <img className='circle-img main-img' src={thumbnail} alt={product.title} />
        <div className='imgs-cointainer'>
          {product.images.slice(0, 3).map((picture, i) => (
            <img className='circle-img small' key={i} src={picture} alt={`Imagen descriptiva n° ${i + 1} del producto ${product.title}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
          ))}
        </div>
      </div>
      <h1>{product.title} - {product.brand}</h1>
      <div className='sub-info'>
        <div>
          <h2>{product.price}$</h2>
          <p>{product.stock} disponibles</p>
        </div>
        <Rating name='read-only' value={product.rating} precision={0.2} size='small' readOnly />
      </div>
      <p>{product.description}</p>
      <button className='btn big'>Comprar</button>
    </>
  )
}
