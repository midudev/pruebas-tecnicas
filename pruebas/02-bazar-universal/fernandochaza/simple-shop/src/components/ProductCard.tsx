import Image from "next/image"

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <article>
      <p>{product.title}</p>
      <div className="w-[400px] h-[400px] relative">
        <Image
          className="absolute object-cover"
          src={product.images[0]}
          alt={`Image of ${product.title}`}
          fill={true}
          priority
        />
      </div>
    </article>
  )
}

export default ProductCard
