import { useLoaderData } from 'react-router-dom'
import { ItemResult } from '../components/ItemResult'
import {
  FaceError,
  NotFound404
} from '../icons'
import { getCategories } from '../utils/getCategories'
import { loaderProducts } from '../interfaces'
import { iconosCategoria } from '../consts'

export function ResultsSearch () {
  const { products } = useLoaderData() as loaderProducts

  const search = new URLSearchParams(window.location.search).get('search')
  const categories = getCategories({ products })

  return (
    <>
      {
        products.length > 0 && (
          <p className='font-semibold text-left'>
            Resultados de búsqueda de "{search || 'Todos'}": {products.length}
          </p>
        )
      }

      <section className='flex gap-3 w-full max-w-full scrollCategories mb-5'>
        {
          categories.map((category, i) => (
            <article
              key={i}
              className='py-2 px-4 even:bg-colorAppBlueLight odd:bg-colorAppPinkLight scrollCategorieItem'
            >
              <p className='flex gap-2 w-max font-bold text-sm'>
                {iconosCategoria[category[0]]} {category[0]} - {category[1]}
              </p>
            </article>
          ))
        }
      </section>

      {
        products.length > 0 && (
          <ul className='flex flex-col gap-6'>
            {products.map(product => (
              <ItemResult
                key={product.id}
                product={product}
              />
            ))}
          </ul>
        )
      }

      {products.length === 0 && (
        <div className='flex flex-col items-center gap-1 text-gray-800 text-lg font-medium mt-10'>
          <span role='img' aria-hidden='true'>
            <FaceError width='85' height='85' />
          </span>
          <div>
            <p>No se encontraron elementos</p>
            <p>Intenta buscando otra cosa</p>
          </div>
          <span role='img' aria-hidden='true'>
            <NotFound404 width='46' height='46' />
          </span>
        </div>
      )}
    </>
  )
}
