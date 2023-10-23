import type { ProductExtended } from '@/types/product'
import { Button } from '@/components/button'
import { ItemsHeader } from '@/components/items/header'
import { Gallery } from '@/components/product/gallery'
import formatPrice from '@/utils/format-price'
import { StarsRating } from '@/components/stars-rating'
import { CATEGORIES } from '@/constants'

const fetchProduct = async (id: string): Promise<ProductExtended> => {
  const response = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/items/${id}`)
  const product = await response.json()
  return product
}

export default async function ItemPage ({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id)
  const categoryEmoji = CATEGORIES[product.category]

  return (
    <main className="flex justify-center items-center flex-col gap-4 pb-14">
      <ItemsHeader />
      <section className="w-full max-w-xs mx-auto px-2">
        <div>
          <Gallery images={product.images} />
        </div>
        <h1 className="text-2xl font-bold font-title">{product.title} - {product.brand}</h1>
        <p className="flex items-center gap-4 justify-between">
          <span className="text-lg text-brand-darker font-semibold">{formatPrice(product.discountPrice)}</span>
          <span className="line-through flex-1">{formatPrice(product.price)}</span>
          <span className="py-0.5 px-1 rounded-md uppercase text-xs bg-brand-dark text-white">
            {product.discountPercentage}% off
          </span>
        </p>

        <div className="h-full my-5 border-b"></div>

        <p>{product.description}</p>
        <p className="inline-block mt-3 py-1.5 px-2 bg-brand-light rounded-lg">{categoryEmoji}{product.category}</p>

        <div className="flex items-center gap-2 my-4 text-sm">
          <StarsRating rating={product.rating} />
          ({ product.rating } / 5)
        </div>

        {
          product.hasStock
            ? (
              <p className="font-bold">
                {product.stock} in stock
              </p>
              )
            : (
              <p className="font-bold text-red-500">
                Out of stock
              </p>
              )
        }

        <Button disable={!product.hasStock}>
          Buy
        </Button>
      </section>
    </main>
  )
}
