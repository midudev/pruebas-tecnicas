import AddToCartIcon from "@/icons/AddToCartIcon"
import Image from "next/image"

const ProductCard = ({ product }: { product: Product }) => {
  const { title, description, price } = product

  const capitalizedTitle = title[0].toUpperCase() + title.slice(1, -1)

  return (
    <article className="bg-slate-100 grid grid-cols-2 auto-rows-min gap-y-2 gap-x-2 relative w-[316px] h-[248px] mx-auto px-4 py-4 shadow-[5px_5px_20px_#b0b2b3,-5px_-5px_20px_#ffffff] rounded-3xl">
      <p className="col-span-full text-center text-lg font-extrabold">
        {capitalizedTitle}
      </p>
      <div className="w-[120px] h-[120px] relative mx-auto row-start-2">
        <Image
          className="absolute object-cover rounded-full border place-self-center"
          src={product.images[0]}
          alt={`Image of ${product.title}`}
          fill={true}
          sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <p className="row-start-2 place-self-center line-clamp-4 overflow-hidden max-h-24">
        {description}
      </p>
      <p className="my-auto col-start-2 row-start-3">$ {price}</p>
      <button className="absolute right-4 bottom-4 rounded-full w-12 h-12 flex flex-col place-items-center place-content-center shadow-[3px_3px_3px_#b0b2b3,-3px_-3px_3px_#ffffff] active:border active:shadow-none transition-shadow duration-50">
        <AddToCartIcon />
      </button>
    </article>
  )
}

export default ProductCard
