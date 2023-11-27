import './results.css'
// Router
import { Link } from 'react-router-dom'
import Product from '../Product/Product'

export default function ResultsContainer({ category, products }) {
  return (
    <>
      <h1>Resultados de búsqueda de "{category}": {products.length}</h1>
      <ul>
        {products.map(product => (
          <Link to={`/items/${product.id}`} key={product.id}>
            <Product productData={product} />
          </Link>
        ))}
      </ul>
    </>
  )
}
