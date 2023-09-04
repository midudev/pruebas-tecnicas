import Image from "next/image"

const ProductCard = ({ product }: { product: IProduct }) => {
  const {title} = product

  return (
    <article className="w-[300px] h-[400px] mx-auto px-8 pt-8 shadow-[10px_10px_30px_#888a8b,-10px_-10px_30px_#ffffff] rounded-3xl flex flex-col">
      <div className="w-[236px] h-[240px] relative">
        <Image
          className="absolute object-cover rounded-xl place-self-center"
          src={product.images[0]}
          alt={`Image of ${product.title}`}
          fill={true}
          priority
        />
      </div>
      <p className="mt-4 font-mono font-medium text-sky-600">{title.toUpperCase()}</p>
    </article>
  )
}

export default ProductCard
