import { Button } from '@/components/button'
import { ItemsHeader } from '@/components/items/header'
import { Gallery } from '@/components/product/gallery'
import { Product } from '@/types/product'

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/items/${id}`)
  const product = await response.json()
  return product
}

export default async function ItemPage ({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id)

  return (
    <main className="flex justify-center items-center flex-col gap-4">
      <ItemsHeader />
      <section className="w-full max-w-xs mx-auto px-2">
        <div>
          <Gallery images={product.images} />
        </div>
        <h1>{product.title} - {product.brand}</h1>
        <p>{product.description}</p>

        <Button>
          Buy
        </Button>
      </section>
    </main>
  )
}
