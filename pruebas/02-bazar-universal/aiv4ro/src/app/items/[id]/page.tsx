import { ProductPrice } from '@/components/ProductPrice'
import { ProductRating } from '@/components/ProductRating'
import { getProduct } from '@/services/get-product'

export default async function Page ({
  params
}: {
  params: {
    id: string
  }
}) {
  const product = await getProduct({ id: params.id })

  const mainImage = product.images[0]
  const otherImages = product.images.slice(1)

  return (
    <section className='flex flex-col justify-center gap-6 mt-5'>
      <header className='flex gap-3 items-center justify-center'>
        <picture className='w-full max-w-[250px] h-auto flex-1 aspect-square overflow-hidden rounded-full'>
          <img className='w-full h-full object-cover' src={mainImage} alt={product.title} />
        </picture>
        <div className='flex flex-col gap-3'>
          {otherImages.map((image, index) => (
            <picture key={index} className='w-16 h-16 overflow-hidden rounded-full'>
              <img className='h-full w-full object-cover' src={image} alt={product.title} />
            </picture>
          ))}
        </div>
      </header>
      <h2 className='text-center text-xl font-semibold'>{product.title} - {product.brand}</h2>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex flex-col text-center'>
          <ProductPrice price={product.price} />
          <span>{product.stock} disponibles</span>
        </div>
        <ProductRating rating={product.rating} />
      </div>
      <p className='text-center'>
        {product.description}
      </p>
      <button className='px-10 py-3 text-xl font-semibold bg-zinc-800 hover:bg-zinc-700 rounded'>
        Comprar
      </button>
    </section>
  )
}
