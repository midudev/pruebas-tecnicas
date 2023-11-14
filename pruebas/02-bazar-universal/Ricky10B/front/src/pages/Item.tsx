import { useLoaderData } from 'react-router-dom'
import { ButtonApp } from '../components/ButtonApp'
import { Stars } from '../components/Stars'
import { loaderItem } from '../interfaces'

export function Item () {
  const { product } = useLoaderData() as loaderItem

  const productImages = product.images.filter(p => p !== product.thumbnail)

  return (
    <section className='flex flex-col gap-3 h-[calc(100%-5rem)]'>
      <picture id='containerImages' className='flex justify-between gap-5'>
        <img
          src={product.thumbnail}
          alt={`Image of ${product.title} 0`}
          className='w-[70%] aspect-square rounded-full'
        />
        <picture className='flex flex-col gap-3'>
          {
            productImages.map((image, i) => (
              <img
                key={image}
                src={image}
                alt={`Image of ${product.title} ${i + 1}`}
                className='w-16 aspect-square rounded-full'
                loading='lazy'
              />
            ))
          }
        </picture>
      </picture>

      <div className='flex flex-col gap-3 h-full'>
        <h1 className='text-3xl font-bold'>
          {product.title} - {product.brand}
        </h1>

        <div className='flex justify-center gap-6 font-bold'>
          <div>
            <p className='text-2xl'>{product.price}$</p>
            <p className='text-sm'>{product.stock} Disponibles</p>
          </div>

          <Stars rating={product.rating} />
        </div>

        <p className='text-left my-2'>{product.description}</p>

        <div className='mt-auto'>
          <ButtonApp
            text='Comprar'
            className='text-[40px] w-full'
          />
        </div>
      </div>
    </section>
  )
}
