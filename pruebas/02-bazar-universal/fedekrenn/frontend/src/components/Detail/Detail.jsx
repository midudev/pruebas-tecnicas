import './detail.css'
// MUI
import Rating from '@mui/material/Rating'

export default function Detail({ product }) {
  return (
    <>
      <div className='row'>
        <img className='circle-img main-img' src={product.thumbnail} alt={product.title} />
        <div className='imgs-cointainer'>
          {product.images.slice(0, 3).map((image, index) => (
            <img className='circle-img small' key={index} src={image} alt={`Imagen descriptiva n° ${index + 1} del producto ${product.title}`} />
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
