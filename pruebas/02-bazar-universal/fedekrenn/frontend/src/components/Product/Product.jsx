import './product.css'
// MUI
import Rating from '@mui/material/Rating'

export default function Product({ productData }) {
  return (
    <li className='card'>
      <img className='circle-img' src={productData.thumbnail} alt={productData.title} />
      <div>
        <h2>{productData.title}</h2>
        <p className='description'>{productData.description.substring(0, 70)}...</p>
        <div className='price-section'>
          <strong>{productData.price}$</strong>
          <Rating name='read-only' value={productData.rating} precision={0.2} size='small' readOnly />
        </div>
      </div>
    </li>
  )
}
