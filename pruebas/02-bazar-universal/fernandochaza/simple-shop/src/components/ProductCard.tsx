import AddToCartIcon from "@/icons/AddToCartIcon"
import Image from "next/image"

const ProductCard = ({ product }: { product: IProduct }) => {
  const { title, description } = product

  const capitalizedTitle = title[0].toUpperCase() + title.slice(1, -1)

  return (
    <article className="bg-slate-100 grid grid-cols-2 auto-rows-min gap-y-2 gap-x-2 relative w-[316px] h-[248px] mx-auto px-4 py-4 shadow-[5px_5px_20px_#b0b2b3,-5px_-5px_20px_#ffffff] rounded-3xl">
      <p className="col-span-full text-center text-lg font-extrabold">
        {capitalizedTitle}
      </p>
      <div className="w-[120px] h-[120px] relative mx-auto">
        <Image
          className="absolute object-cover rounded-full shadow-[5px_5px_17px_#b0b2b3,-5px_-5px_17px_#ffffff] place-self-center"
          src={product.images[0]}
          alt={`Image of ${product.title}`}
          fill={true}
          priority
        />
      </div>
      <p className="place-self-center line-clamp-4 overflow-hidden max-h-24">{description}</p>
      <button className="absolute right-4 bottom-4 rounded-full w-12 h-12 flex flex-col place-items-center place-content-center shadow-[3px_3px_3px_#b0b2b3,-3px_-3px_3px_#ffffff]">
        <AddToCartIcon />
      </button>
    </article>
  )
}

export default ProductCard
