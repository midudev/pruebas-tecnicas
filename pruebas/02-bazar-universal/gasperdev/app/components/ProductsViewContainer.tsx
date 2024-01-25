import ProductView from "./ProductView"
import { getProductById } from "../lib/data"
import ListImg from "./ListImg"
import Button from "./ui/Button"

interface Props {
  itemId: number
}

export default async function ProductsContainer({ itemId }: Props) {
  const product = await getProductById({ itemId })

  return (
    <section className="w-full">
      {product.map((product) => (
        <div key={product.id}>
          <ProductView
            product={product}
            className="flex-col pb-4"
            imgClassName="rounded-lg w-full h-full mb-4"
          />
          <Button className="mb-10 w-full">comprar</Button>
          <footer>
            <ListImg product={product} />
          </footer>
        </div>
      ))}
    </section>
  )
}
